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
import VideoCarousel from "./video-caro";
import VideoCard from "./video-card";
export default function Category({ name }: { name: string }) {
  const [categoryOpen, setCategoryOpen] = useState(true);

  const categoryVariant = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  // TODO: Fetch videos
  const videos = [
    {
      title: "Titiolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/hEdzv7D4CbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCggPxA9ggUsMAhXCfGRl8ahmV4pQ",
      categories: ["Argomento 1", "Argomento 2"],
    },
    {
      title: "Titiolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/FPiZ7z6lU54/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEv9B2SreeOLvmVUGmI9OjI1Ugow",
      categories: ["Argomento 1", "Argomento 2"],
    },
    {
      title: "Titiolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/ZvZ7da8JBUk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCj25_c-1-g7JawtfmEXRADWpCQNQ",
      categories: ["Argomento 1", "Argomento 2"],
    },
    {
      title: "Titiolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/sPyAQQklc1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArrvFaLETjv_3WSloUwMlA8S0wjw",
      categories: ["Argomento 1", "Argomento 2"],
    },
    {
      title: "Titolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/kQzjlHYeTCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbIX6BhKxgK_KUwpxU4r9FgULwYg",
      categories: ["Argomento 1", "Argomento 2"],
    },
    {
      title: "Titolo video",
      description: "Descrizione video",
      link: "https://www.youtube.com",
      thumbnail:
        "https://i.ytimg.com/vi/rG4jSz_2HDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg1r4d8-QAyv_9LqhxV8N_OXQk2A",
      categories: ["Argomento 1", "Argomento 2"],
    },
  ];

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
          <VideoCarousel>
            {videos.map((video, idx) => (
              <VideoCard key={idx} {...video} />
            ))}
          </VideoCarousel>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
}
