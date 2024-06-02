"use client";
import { Videotape } from "lucide-react";
import Link from "next/link";
import TextMD from "../typhography/textMD";
import NavAuth from "./navAuth";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-screen border backdrop-blur-sm bg-background/90 border-zinc-700/45">
      {/* CONTAINER */}
      <div className="flex items-center justify-between px-4 py-2 md:px-10 max-max-w-screen-md">
        {/* LOGO */}
        <Link className="flex items-center space-x-4" href="./">
          <Videotape className="text-primary" />
          <TextMD className="text-xl">Videoteca Visori 360</TextMD>
        </Link>
        {/* NAV */}
        <div className="flex items-center space-x-2">
          <NavAuth />
        </div>
      </div>
    </nav>
  );
}
