"use client";
import FormVideo from "@/components/form/form-video";
import RouteProvider from "@/lib/providers/route-provider";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [subjs, setSubjs] = useState<string[]>();
  const [topics, setTopics] = useState<Map<string, Set<string>>>();

  useEffect(() => {
    setLoading(true);

    fetch("/php/datiHome.php?getMaterie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res
          .json()
          .then((subjects) =>
            setSubjs(
              subjects.map((s: { nome: string; id: string }) =>
                s.nome.toLowerCase()
              )
            )
          )
      )
      .catch((err) => console.log(err));

    fetch("/php/datiHome.php?getArgomenti", {
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
  }, []);

  return (
    <RouteProvider>
      {!loading && subjs && topics && (
        <FormVideo subjects={subjs} topics={topics} />
      )}
    </RouteProvider>
  );
}
