"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import TextMD from "../typhography/textMD";
import TextXL from "../typhography/textXL";
import Par from "../typhography/par";
import useVideoFetching from "@/lib/hooks/useVideoFetching";

export default function Heading() {
  const { data: videos } = useVideoFetching({});
  const count = Math.floor((videos?.length ?? 0) / 5) * 5;
  return (
    <motion.div
      className="px-4 mt-20 md:h-[40vh] h-[65vh] flex justify-center items-center flex-col md:mb-16 overflow-hidden w-[100vw] text-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <Badge className="px-4 py-2 mb-10">
        {" "}
        <TextMD>Più di {count} video...</TextMD>
      </Badge>
      <TextXL className="text-4xl md:text-6xl">Videoteca Visori 360º</TextXL>
      <Par className="px-5 2xl:px-[30%] text-sm md:px-14 md:text-lg text-muted-foreground">
        Benvenuto nella Videoteca 360° dell&apos;I.T.I.S. G. Vallauri di
        Velletri. Qui, potrai scegliere tra una vasta gamma di contenuti
        selezionati con cura e immergerti nella visione attraverso la realtà
        virtuale.{" "}
      </Par>
    </motion.div>
  );
}
