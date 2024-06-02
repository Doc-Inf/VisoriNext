import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email({
    message: "Email non valida",
  }),
  password: z.string().min(8, {
    message: "Password non valida",
  }),
  code: z.optional(z.string()),
});

const VideoCreateForm = z.object({
  title: z.optional(z.string()),
  desc: z.optional(z.string()),
  author: z.optional(z.string()),
  duration: z
    .string()
    .min(1, { message: "Inserisci la durata" })
    .time({ message: "Inserisci un tempo valido" }),
  img: z
    .string()
    .url({ message: "Inserisci un url valido" })
    .optional()
    .or(z.literal("")),
  url: z.string().url({ message: "Inserisci un url valido" }),
  lang: z.string().min(1, { message: "Inserisci la lingua" }),
  subject: z.string().min(1, { message: "Inserisci la materia" }),
  topic: z.string().min(1, { message: "Inserisci l'argomento" }),
});

const UserCreateForm = z.object({
  name: z.string().min(1, { message: "Inserisci il nome" }),
  surname: z.string().min(1, { message: "Inserisci il cognome" }),
  email: z.string().email({
    message: "Email non valida",
  }),
  password: z.string().min(8, {
    message: "Password non valida",
  }),
});

const SelectedTableForm = z.object({
  idx: z.array(z.number()).min(1, { message: "Seleziona almeno un elemento" }),
});

const DeleteUserSchema = z.object({
  name: z.string().min(1, { message: "Inserisci il nome" }),
  surname: z.string().min(1, { message: "Inserisci il cognome" }),
});

export {
  LoginSchema,
  VideoCreateForm,
  UserCreateForm,
  SelectedTableForm,
  DeleteUserSchema,
};
