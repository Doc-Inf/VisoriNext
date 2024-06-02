"use client";
import Heading from "@/components/hero/heading";
import VideoFeed from "@/components/hero/video-feed";
import TextMD from "@/components/typhography/textMD";
import useHomeFetching from "@/lib/hooks/useHomeFetching";
import RouteProvider from "@/lib/providers/route-provider";
import { useState } from "react";

const getQuery = ({ topic, subject }: { subject: string; topic: string }) => {
  const query = new URLSearchParams();
  if (topic !== "all") query.append("argomento", topic);
  if (subject !== "all") query.append("materia", subject);
  return query.toString();
};

export default function Home() {
  const [selected, setSelected] = useState({
    subject: "all",
    topic: "all",
  });
  const query = getQuery(selected);
  const { videos, subjs, topics, loading, error } = useHomeFetching(query);

  return (
    <RouteProvider>
      <Heading />
      {!loading && error && (
        <TextMD className="text-destructive text-center">{error}</TextMD>
      )}
      {!loading && videos && subjs && topics && (
        <VideoFeed
          videos={videos}
          subjs={subjs}
          topics={topics}
          selected={selected}
          setSelected={setSelected}
          loading={loading}
        />
      )}
    </RouteProvider>
  );
}
