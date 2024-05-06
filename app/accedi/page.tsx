import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Card className="absolute top-1/2 -translate-y-1/2 space-y-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] max-w-screen-md">
        <CardHeader>
          <CardTitle className="m-auto text-4xl">Accedi</CardTitle>
          <CardDescription className="text-justify text-pretty text-md md:text-center">
            Bentornato, inserisci le tue credenziali per accedere
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" />
          </div>
          <div className="flex items-center gap-4 pt-4">
            <label htmlFor="remember">Rimani connesso</label>
            <Checkbox id="remember" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-8 pb-4">
          <Button className="w-full">Log in</Button>
          <p className="text-sm text-muted-foreground">
            Non sei ancora registrato?
            <Link
              href="/registrati"
              className={`${buttonVariants({
                variant: "link",
              })} text-slate-700 dark:text-slate-300 `}
            >
              Registrati
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
