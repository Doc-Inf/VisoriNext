"use client";
import TextLG from "../typhography/textLG";
import VideoCard from "./video-card";
import { ClientVideo } from "@/constants/types";
import TextMD from "../typhography/textMD";

export default function Category({
  selected,
  videos,
}: {
  selected: { topic: string; subject: string };
  videos: ClientVideo[];
}) {
  return videos.length !== 0 ? (
    <>
      <TextLG className="mt-12 mb-2 text-center md:mt-24 first-letter:capitalize">
        {selected.subject !== "all" ? selected.subject : "Tutte le materie"}
      </TextLG>
      <div className="px-4 pb-12 mt-0 border-b-2 bg-secondary/80">
        <TextLG className="h-16 px-8 pt-4 pb-0 text-lg  first-letter:capitalize md:text-2xl">
          {selected.topic !== "all" ? selected.topic : "Tutti i argomenti"}
        </TextLG>

        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-y-4  m-auto">
          {videos.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <TextMD className="mt-24 mb-2 text-center text-destructive first-letter:capitalize">
      Nessun video trovato
    </TextMD>
  );
}
