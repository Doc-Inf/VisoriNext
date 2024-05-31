"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCreateForm } from "@/schemas";
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
import FormError from "@/components/form/state/formError";
import FormSuccess from "@/components/form/state/formSuccess";
import FormLoader from "@/components/form/state/formLoader";
import { register } from "@/lib/auth";
import { useToast } from "../ui/use-toast";

export default function RegisterForm() {
  const { toast } = useToast();
  const [err, setErr] = useState<string | undefined>("");
  const [succ, setSucc] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof UserCreateForm>>({
    resolver: zodResolver(UserCreateForm),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserCreateForm>) => {
    setIsPending(true);
    setErr("");
    setSucc("");

    try {
      const res = await register(values);

      if (res instanceof Error) {
        setErr(res.message);
        toast({
          title: "Errore",
          description: res.message,
          variant: "destructive",
        });
        throw res;
      }

      form.reset();
      toast({
        title: "Utente creato",
        description: "L&apos;utente è stato creato con successo",
      });
    } catch (error) {
      // @ts-ignore TODO: fix
      error.message !== "Credenziali non valide" && console.log(error);
    }
    setIsPending(false);
  };

  return (
    <FormWrapper
      title="Crea un nuovo utente 🔐"
      desc="Bentornato, inserisci qui le tue credenziali per creare un nuovo utente"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Nome dell'utente"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Nome dell&apos;utente da creare
                </FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cognome</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Cognome dell'utente"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Cognome dell&apos;utente da creare
                </FormDescription>
              </FormItem>
            )}
          ></FormField>

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
                <FormDescription>
                  Email dell&apos;utente da creare
                </FormDescription>
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
                <FormDescription>
                  Password dell&apos;utente da creare
                </FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" disabled={isPending} className="w-full">
            Crea nuovo utente
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
