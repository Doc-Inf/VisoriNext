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

export default function NavAuth() {
  const router = useRouter();
  const { toast } = useToast();
  const loggedIn = isAuthenticated();

  return !loggedIn ? (
    <Link
      className={buttonVariants({ variant: "default" })}
      href="./accedi.html"
    >
      Accedi
    </Link>
  ) : (
    <DropdownMenu>
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
        <DropdownMenuItem>
          <Link href="./nuovo-video">Nuovo video</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="./nuovo-utente">Nuovo utente</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            logout();
            toast({
              title: "Logout effettuato",
              description: "Sei stato disconnesso",
            });
            router.refresh();
          }}
          className={buttonVariants({
            variant: "default",
          })}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
