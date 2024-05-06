"use client";
import { Search, Videotape } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { cn } from "@/lib/utils";
import TextMD from "../typhography/textMD";
import { Input } from "../ui/input";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  /* SM MENU */
  const [menu, setMenu] = useState<Boolean>(false);

  /* UPDATE MENU STATUS ONCLICK */
  const handleMenu = () => setMenu((prev) => !prev);

  return (
    <nav className="w-full border border-border">
      {/* CONTAINER */}
      <div className="flex items-center justify-between px-4 py-2 md:px-10 max-max-w-screen-md">
        {/* LOGO */}
        <Link className="flex items-center space-x-4" href="/">
          <Videotape className="text-primary" />
          <TextMD className="text-xl">Videoteca Visori 360</TextMD>
        </Link>

        {/* NAV */}
        <div className="items-center hidden space-x-2 md:flex">
          <ModeToggle />
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/accedi"
          >
            Accedi
          </Link>
          <Link
            className={cn("bg-primary", buttonVariants({ variant: "default" }))}
            href="/registrati"
          >
            Registrati
          </Link>
        </div>
        {/* MOBILE */}
        <div className="flex items-center md:hidden">
          {/* THEME SWITCH FOR MOBILE */}
          <div className="md:hidden me-4">
            <ModeToggle />
          </div>
          <Button className="mobile-menu-button" onClick={handleMenu}>
            <HamburgerMenuIcon />
          </Button>
        </div>
      </div>

      {/* SM NAV */}
      <div
        className={`${
          menu ? `flex` : `hidden`
        } flex-col pb-4 mt-4 space-y-4 md:hidden`}
      >
        {/* SEARCH BAR AND LOG IN BTNS */}
        <div className="flex max-w-md m-auto space-x-2">
          {/* LOGIN BTNS */}
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/accedi"
          >
            Accedi
          </Link>
          <Link
            className={cn("bg-primary", buttonVariants({ variant: "default" }))}
            href="/registrati"
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}
