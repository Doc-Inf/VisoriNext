"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import TextLG from "../typhography/textLG";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import VideoCard from "./video-card";
import { ClientVideo } from "@/constants/types";

export default function Category({
  name,
  videos,
}: {
  name: string;
  videos: ClientVideo[];
}) {
  return (
    <motion.div className="mt-0 border-b-2 bg-secondary/80">
      <div className="flex items-center space-x-4 w-[85%] h-16 m-auto">
        <TextLG className="pb-0 text-lg first-letter:capitalize md:text-2xl">
          {name}
        </TextLG>
      </div>
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-y-4  m-auto">
        {videos.map((video, idx) => (
          <VideoCard key={idx} {...video} categories={["Categ 1", "Categ 2"]} />
        ))}
      </div>
    </motion.div>
  );
}
