"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import TextMD from "../typhography/textMD";
import TextXL from "../typhography/textXL";
import Par from "../typhography/par";

export default function Heading() {
  return (
    <motion.div
      className="px-4 mt-20 h-[40vh] overflow-hidden w-[100vw] text-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <Badge className="px-4 py-2 mb-10">
        {" "}
        <TextMD>Più di ... video</TextMD>
      </Badge>
      <TextXL className="text-4xl md:text-6xl">Videoteca Visori 360º</TextXL>
      <Par className="px-10 text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia
        veniam nesciunt, aspernatur labore aliquam ipsam illum quisquam.
      </Par>
    </motion.div>
  );
}
