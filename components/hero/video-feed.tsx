"use client";
import Category from "../videos/category";
import SearchBar from "./search-bar";
import { useState } from "react";
import useHomeFetching from "@/lib/hooks/useHomeFetching";

const getQuery = ({ topic, subject }: { subject: string; topic: string }) => {
  const query = new URLSearchParams();
  if (topic !== "all") query.append("argomento", topic);
  if (subject !== "all") query.append("materia", subject);
  return query.toString();
};
export default function VideoFeed() {
  const [selected, setSelected] = useState({
    subject: "all",
    topic: "all",
  });
  const query = getQuery(selected);
  const { videos, subjs, topics, loading, error } = useHomeFetching(query);

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
