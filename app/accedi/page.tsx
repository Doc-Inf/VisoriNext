"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import FormWrapper from "@/components/form/form-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormError from "@/components/form/state/formError";
import FormSuccess from "@/components/form/state/formSuccess";
import FormLoader from "@/components/form/state/formLoader";
import { decryptJWT } from "@/lib/jwt/";
import { login } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();

  const [err, setErr] = useState<string | undefined>("");
  const [succ, setSucc] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsPending(true);
    setErr("");
    setSucc("");

    try {
      const res = await login(values);

      if (res instanceof Error) {
        setErr(res.message);
        throw res;
      }

      router.replace("/");
      router.refresh();
    } catch (error) {
      // @ts-ignore TODO: fix
      error.message !== "Credenziali non valide" && console.log(error);
    }
    setIsPending(false);
  };

  return (
    <FormWrapper
      title="Accedi 🔐"
      desc="Bentornato, inserisci qui le tue credenziali per accedere al tuo account"
      sub="Non hai un account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="email@email.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Email dell&apos;account</FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="******"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Password dell&apos;account</FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" disabled={isPending} className="w-full">
            Accedi
          </Button>
          {/*  ⚠️ TODO REMOVE */}
          <Button
            type="button"
            disabled={isPending}
            onClick={async () => console.log(await decryptJWT())}
            className="w-full"
          >
            ⚠️ SEE CURRENT DECRYPTED JWT
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
