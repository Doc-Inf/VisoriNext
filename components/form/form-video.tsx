"use client";
import { UserCreateForm } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormWrapper from "./form-wrapper";
import { useState } from "react";
import CmdSubject from "../cmd-boxes/cmd-subject";
import { CirclePlus, MousePointerIcon } from "lucide-react";
import CmdTopic from "../cmd-boxes/cmd-topic";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useToast } from "../ui/use-toast";
import FormError from "./state/formError";
import FormSuccess from "./state/formSuccess";
import FormLoader from "./state/formLoader";
import { isAuthenticated } from "@/lib/auth";

export default function FormVideo({
  subjects,
  topics,
}: {
  subjects: string[];
  topics: Map<any, any>;
}) {
  const [err, setErr] = useState<string | undefined>("");
  const [succ, setSucc] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState<string>("");
  const [create, setCreate] = useState({ subj: false, topic: false });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof UserCreateForm>>({
    resolver: zodResolver(UserCreateForm),
    defaultValues: {
      title: "",
      url: "",
      subject: "",
      topic: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserCreateForm>) => {
    setIsPending(true);
    setErr("");
    setSucc("");

    // should not happen with the route provider
    if (!isAuthenticated()) {
      toast({
        variant: "destructive",
        title: "Errore nella creazione del video",
        description: "Devi essere autenticato per creare un video",
      });
      setErr("Devi essere autenticato per creare un video");
      setIsPending(false);
      return;
    }

    try {
      // TODO: export to lib
      const videoRes = await fetch("/api/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: values.url }),
      });
      const videoData = await videoRes.json();
      const {
        title: titolo,
        description: descrizione,
        channelTitle: autore,
      } = videoData.items[0].snippet;

      // TODO: check for auth, create video with values
      const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
        /*"/api/video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),}*/
      );

      if (res.ok) {
        setSucc("Video creato con successo");
        form.reset();
      } else if (res.status === 400) {
        setErr("Impossibile creare un video con i valori inseriti");
        toast({
          variant: "destructive",
          title: "Errore nella creazione del video",
          description: "Impossibile creare il video, con i valori inseriti",
        });
        throw new Error("Failed to create video with values", {
          cause: values,
        });
      } else {
        setErr("Errore nella creazione del video, riprova più tardi");
        toast({
          variant: "destructive",
          title: "Errore nella creazione del video",
          description: "Impossibile creare il video, riprova più tardi",
        });
        throw new Error(
          "Failed to create video with values, with the following result and values",
          {
            cause: { val: values, res: res },
          }
        );
      }
    } catch (e) {
      console.log(e);
    }

    setIsPending(false);
  };

  return (
    <FormWrapper
      title="Crea un nuovo video"
      desc="Inserisci titolo, url, materia e argomenti per creare un nuovo video"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            disabled={isPending}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titolo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Inserisci il titolo del video"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Titolo opzionale del video, se non inserito lo titolo del
                  video sarà generato automaticamente
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            disabled={isPending}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link al video * </FormLabel>
                <FormControl>
                  <Input placeholder="https://youtube.com/..." {...field} />
                </FormControl>
                <FormDescription>Link al video da creare</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            disabled={isPending}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Materia * </FormLabel>
                <FormControl>
                  <div className="w-full flex justify-between">
                    <Input
                      placeholder="Nuova materia "
                      className={!create.subj ? "hidden" : "mr-2 rounded-xl"}
                      {...field}
                    />
                    {!create.subj && (
                      <CmdSubject
                        disabled={isPending}
                        subjects={subjects}
                        selected={subject}
                        setSelected={(val: string) => {
                          setSubject(val);
                          field.onChange(val);
                        }}
                      />
                    )}
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={() =>
                        setCreate({ ...create, subj: !create.subj })
                      }
                    >
                      {!create.subj ? "Crea nuova" : "Seleziona materia"}
                      {!create.subj ? (
                        <CirclePlus className="ms-2 h-4 w-4" />
                      ) : (
                        <MousePointerIcon className="ms-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>
                  Scegli tra le materie esistenti o creane una nuova
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            disabled={isPending}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Argomento * </FormLabel>
                <FormControl>
                  <div className="w-full flex justify-between">
                    <Input
                      placeholder="Argomento del video"
                      className={!create.topic ? "hidden" : "mr-2 rounded-xl"}
                      {...field}
                    />
                    {!create.topic && (
                      <CmdTopic
                        selectedSubject={subject}
                        disabled={isPending}
                        topics={topics}
                        selected={topic}
                        setSelected={(val: string) => {
                          setTopic(val);
                          field.onChange(val);
                        }}
                      />
                    )}
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={() =>
                        setCreate({ ...create, topic: !create.topic })
                      }
                    >
                      {!create.topic ? "Crea nuovo" : "Seleziona argomento"}
                      {!create.topic ? (
                        <CaretSortIcon className="ms-2 h-4 w-4" />
                      ) : (
                        <MousePointerIcon className="ms-2 h-4 w-4" />
                      )}{" "}
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>
                  Seleziona o crea l&apos;argomento del video
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" className="w-full">
            Crea
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
