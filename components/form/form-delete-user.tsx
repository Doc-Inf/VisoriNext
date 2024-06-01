"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteUserSchema } from "@/schemas";
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
import { deleteUser, isAuthenticated } from "@/lib/auth";
import { useToast } from "../ui/use-toast";

export default function DeleteUserForm() {
  const { toast } = useToast();
  const [err, setErr] = useState<string | undefined>("");
  const [succ, setSucc] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof DeleteUserSchema>>({
    resolver: zodResolver(DeleteUserSchema),
    defaultValues: {
      name: "",
      surname: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DeleteUserSchema>) => {
    setIsPending(true);
    setErr("");
    setSucc("");

    if (!isAuthenticated()) {
      setErr("Devi essere loggato per rimuovere un utente");
      setIsPending(false);
      return;
    }
    try {
      const res = await deleteUser(values);

      if (res instanceof Error) {
        setErr(res.message);
        toast({
          title: "Errore",
          description: res.message,
          variant: "destructive",
        });
        throw res;
      }

      if (res === true) {
        toast({
          title: "Utente rimosso",
          description: `L&apos;utente "${values.name} ${values.surname}" è stato rimosso con successo`,
        });
      }
    } catch (error) {
      // @ts-ignore TODO: fix
      error.message !== "Credenziali non valide" && console.log(error);
    }

    setIsPending(false);
  };

  return (
    <FormWrapper
      title="Rimuovi un utente dalla videoteca"
      desc="Inserisci qui nome e cognome dell'utente per rimuovere il suo account"
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
                    placeholder="Nome utente da rimuovere"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Nome dell&apos;account</FormDescription>
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
                    placeholder="Cognome dell'utente da rimuovere"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Cognome dell&apos;account</FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" disabled={isPending} className="w-full">
            Rimuovi utente
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
