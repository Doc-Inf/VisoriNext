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
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Card className="absolute top-1/2 -translate-y-1/2 space-y-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] max-w-screen-md">
        <CardHeader>
          <CardTitle className="m-auto text-4xl">Registrati</CardTitle>
          <CardDescription className="text-justify text-pretty text-md md:text-center">
            Benvenuto, inserisci le tue credenziali per creare un account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="c-password">Conferma la password</Label>
            <Input type="password" id="c-password" placeholder="*******" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-8 pb-4">
          <Button className="w-full">Registrati</Button>
          <p className="text-sm text-muted-foreground">
            Hai già un account?
            <Link
              href="/accedi"
              className={`${buttonVariants({
                variant: "link",
              })} text-slate-700 dark:text-slate-300`}
            >
              Accedi
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
