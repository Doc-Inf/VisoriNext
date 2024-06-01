"use client";
import { motion } from "framer-motion";
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
      <TextLG className="mt-24 mb-2 text-center first-letter:capitalize">
        {selected.subject !== "all" ? selected.subject : "Tutte le materie"}
      </TextLG>
      <motion.div className="mt-0 border-b-2 bg-secondary/80">
        <div className="flex items-center space-x-4 w-[85%] h-16 m-auto">
          <TextLG className="pb-0 text-lg first-letter:capitalize md:text-2xl">
            {selected.topic !== "all" ? selected.topic : "Tutti i argomenti"}
          </TextLG>
        </div>
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-y-4  m-auto">
          {videos.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))}
        </div>
      </motion.div>
    </>
  ) : (
    <TextMD className="text-destructive mt-24 mb-2 text-center first-letter:capitalize">
      Nessun video trovato
    </TextMD>
  );
}
