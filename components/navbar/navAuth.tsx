"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { getCookie } from "cookies-next";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function NavAuth() {
  const router = useRouter();
  const sessionID = getCookie("session");
  return !sessionID ? (
    <>
      <Link className={buttonVariants({ variant: "outline" })} href="/accedi">
        Accedi
      </Link>
      <Link
        className={cn("bg-primary", buttonVariants({ variant: "default" }))}
        href="/registrati"
      >
        Registrati
      </Link>
    </>
  ) : (
    <Button
      onClick={() => {
        logout();
        router.refresh();
      }}
    >
      Logout
    </Button>
  );
}
