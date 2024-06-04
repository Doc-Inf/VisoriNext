"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteVideoSchema } from "@/schemas";
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
import { isAuthenticated } from "@/lib/auth";
import { useToast } from "../ui/use-toast";

export default function DeleteVideoForm() {
  const { toast } = useToast();
  const [err, setErr] = useState<string | undefined>("");
  const [succ, setSucc] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof DeleteVideoSchema>>({
    resolver: zodResolver(DeleteVideoSchema),
    defaultValues: {
      title: "",
      author: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DeleteVideoSchema>) => {
    setIsPending(true);
    setErr("");
    setSucc("");

    if (!isAuthenticated()) {
      setErr("Devi essere loggato per rimuovere un video");
      toast({
        title: "Errore",
        description: "Devi essere loggato per rimuovere un video",
      });
      setIsPending(false);
      return;
    }

    const { title, author } = values;
    const body = new URLSearchParams();
    body.append("titolo", title);
    body.append("autore", author);
    const res = await fetch("./php/deleteVideo.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!res.ok) {
      setErr("Errore nella risposta");
      toast({
        title: "Errore",
        description: "Errore nella risposta",
        variant: "destructive",
      });
      setIsPending(false);
      return;
    }
    const { result, error } = await res.json();

    if (error === "effettuare prima il login") {
      setErr("Devi essere loggato per rimuovere un video");
      toast({
        title: "Errore",
        description: "Devi essere loggato per rimuovere un video",
        variant: "destructive",
      });
      setIsPending(false);
      return;
    }

    if (error === "Video not found" || error === "missing id") {
      setErr("Video non trovato");
      toast({
        title: "Errore",
        description: "Video non trovato",
        variant: "destructive",
      });
      setIsPending(false);
      return;
    }
    if (result === "success") {
      setSucc("Video rimosso con successo");
      toast({
        title: "Rimozione completata",
        description: "Video rimosso con successo",
      });
      setIsPending(false);
      return;
    }
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titolo</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Titolo video da rimuovere"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Titolo del video</FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Autore</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Autore del video da rimuovere"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Autore del video</FormDescription>
              </FormItem>
            )}
          ></FormField>

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" disabled={isPending} className="w-full">
            Rimuovi il video
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
