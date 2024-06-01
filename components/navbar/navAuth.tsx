"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { isAuthenticated, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AUTHENTICATED_USER_LINKS } from "@/constants/NAV_LINKS";
import { Separator } from "../ui/separator";
import { useState } from "react";

export default function NavAuth() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const loggedIn = isAuthenticated();

  return !loggedIn ? (
    <Link className={buttonVariants({ variant: "default" })} href="/accedi">
      Accedi
    </Link>
  ) : (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <div className="w-[40px] h-[40px] rounded-full bg-primary relative">
            <div className="absolute w-full text-xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-background">
              D
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="*:w-full *:justify-center text-center">
          <DropdownMenuLabel>Il tuo account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {AUTHENTICATED_USER_LINKS.map((category) => (
            <>
              {category.map(({ name, href }) => (
                <DropdownMenuItem key={name}>
                  <Link href={href} onClick={() => setOpen(false)}>
                    {name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <Separator />
            </>
          ))}
          <DropdownMenuItem
            onClick={() => {
              logout();
              toast({
                title: "Logout effettuato",
                description: "Sei stato disconnesso",
              });
              router.refresh();
            }}
            className={
              buttonVariants({
                variant: "default",
              }) + " mt-1"
            }
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
