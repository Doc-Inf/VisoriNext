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
  const [categoryOpen, setCategoryOpen] = useState(true);

  const categoryVariant = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <motion.div
      className={`px-0 ${
        categoryOpen ? "pb-10" : "pb-0"
      } border-b-2 bg-secondary/80 mt-0`}
    >
      <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
        <div className="flex items-center space-x-4 w-[85%] h-16 m-auto">
          <TextLG>{name}</TextLG>
          <CollapsibleTrigger asChild>
            <Button variant="ghost">
              <motion.div
                animate={categoryOpen ? "closed" : "open"}
                variants={categoryVariant}
              >
                <ChevronDown />
              </motion.div>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-y-4  m-auto">
            {videos.map((video, idx) => (
              <VideoCard
                key={idx}
                {...video}
                categories={["Categ 1", "Categ 2"]}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
}
