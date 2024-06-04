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

const DeleteUserSchema = z.object({
  name: z.string().min(1, { message: "Inserisci il nome" }),
  surname: z.string().min(1, { message: "Inserisci il cognome" }),
});

const DeleteVideoSchema = z.object({
  title: z.string().min(1, { message: "Inserisci il titolo" }),
  author: z.string().min(1, { message: "Inserisci l'autore" }),
});

export {
  LoginSchema,
  VideoCreateForm,
  UserCreateForm,
  DeleteUserSchema,
  DeleteVideoSchema,
};
