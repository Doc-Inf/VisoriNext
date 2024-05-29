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
import { ChevronDown, CirclePlus, MousePointerIcon } from "lucide-react";
import CmdTopic from "../cmd-boxes/cmd-topic";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useToast } from "../ui/use-toast";
import FormError from "./state/formError";
import FormSuccess from "./state/formSuccess";
import FormLoader from "./state/formLoader";
import { isAuthenticated } from "@/lib/auth";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Textarea } from "../ui/textarea";

export default function FormVideo({
  subjects,
  topics,
}: {
  subjects: string[];
  topics: Map<any, any>;
}) {
  const [openOptional, setOpenOptional] = useState(false);
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
      desc: "",
      author: "",
      duration: "",
      lang: "",
      img: "",
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
        thumbnails: {
          medium: { url: image },
        },
      } = videoData.items[0].snippet;

      if (values.title === "") values.title = titolo;
      if (values.desc === "") values.desc = descrizione;
      if (values.author === "") values.author = autore;
      if (values.img === "") values.img = image;

      // TODO: check for auth, create video with values
      const res: Response = await fetch("/api/create-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setSucc("Video creato con successo");
        form.reset();
      } else if (res.status === 403) {
        setErr("Accedi per creare un video");
        toast({
          variant: "destructive",
          title: "Errore nella creazione del video",
          description: "Devi essere autenticato per creare un video",
        });
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
      desc="Inserisci url, materia e argomenti per creare un nuovo video"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            disabled={isPending}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link al video</FormLabel>
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
            name="lang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lingua</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Inserisci la lingua del video"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Lingua del video da creare</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            disabled={isPending}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Durata</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Inserisci la durata del video (hh:mm:ss)"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Durata del video da creare</FormDescription>
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
                <FormLabel>Materia </FormLabel>
                <FormControl>
                  <div className="flex justify-between w-full">
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
                        <CirclePlus className="w-4 h-4 ms-2" />
                      ) : (
                        <MousePointerIcon className="w-4 h-4 ms-2" />
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
                <FormLabel>Argomento </FormLabel>
                <FormControl>
                  <div className="flex justify-between w-full">
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
                        <CaretSortIcon className="w-4 h-4 ms-2" />
                      ) : (
                        <MousePointerIcon className="w-4 h-4 ms-2" />
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

          <Collapsible open={openOptional} onOpenChange={setOpenOptional}>
            <CollapsibleTrigger className="flex w-[40%] gap-2 items-center">
              Informazioni opzionali{" "}
              <ChevronDown
                className={`h-4 w-4 ${openOptional ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-8 space-y-8">
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
                      Titolo opzionale del video, se non inserito il titolo del
                      video sarà generato automaticamente
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                disabled={isPending}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrizione</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Inserisci la descrizione del video"
                        className="resize-none rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Desrizione opzionale del video, se non inserita la
                      descrizione del video sarà generata automaticamente
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                disabled={isPending}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL immagine</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Inserisci l'url dell'immagine del video"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Immagine opzionale del video, se non inserita
                      l&apos;immagine del video sarà generata automaticamente
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleContent>
          </Collapsible>

          <FormError message={err} />
          <FormSuccess message={succ} />
          <FormLoader loading={isPending} />

          <Button type="submit" disabled={isPending} className="w-full">
            Crea video
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
