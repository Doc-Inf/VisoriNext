"use client";
import TextLG from "../typhography/textLG";
import Category from "../videos/category";
import SearchBar from "./search-bar";
import { useEffect, useState } from "react";
import { ClientVideo, ServerVideo } from "@/constants/types";
import { getClientVideos } from "@/constants/functions";

export default function VideoFeed() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<ClientVideo[]>();
  const [subjs, setSubjs] = useState<string[]>();
  const [topics, setTopics] = useState<Map<string, Set<string>>>();

  const [selected, setSelected] = useState({
    subject: "all",
    topic: "all",
  });
  useEffect(() => {
    setLoading(true);
    const searchParams = new URLSearchParams();
    selected.subject !== "all" &&
      searchParams.append("materia", selected.subject);
    selected.topic !== "all" &&
      searchParams.append("argomento", selected.topic);

    fetch(`./php/datiHome.php?${searchParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res
          .json()
          .then((data: ServerVideo[]) => setVideos(getClientVideos(data)))
      )
      .catch((err) => console.log(err));

    fetch("./php/datiHome.php?getMaterie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res
          .json()
          .then((subjects) =>
            setSubjs([
              "all",
              ...subjects.map((s: { nome: string; id: string }) =>
                s.nome.toLowerCase()
              ),
            ])
          )
      )
      .catch((err) => console.log(err));

    fetch("./php/datiHome.php?getArgomenti", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        const map = new Map();
        for (const { nomeArgomento, materia } of data) {
          const lowerMateria = materia.toLowerCase();
          const lowerArgomento = nomeArgomento.toLowerCase();
          if (!map.has(lowerMateria)) {
            map.set(lowerMateria, new Set([lowerArgomento]));
            continue;
          }
          map.set(lowerMateria, map.get(lowerMateria).add(lowerArgomento));
        }

        setTopics(map);
      })
    );
    setLoading(false);
  }, [selected]);

  return (
    <>
      {subjs && topics && (
        <SearchBar
          subjects={subjs}
          topics={topics}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {!loading && <Category selected={selected} videos={videos ?? []} />}
    </>
  );
}
