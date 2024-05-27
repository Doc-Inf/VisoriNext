import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email({
    message: "Email non valida",
  }),
  password: z.string().min(1, {
    message: "Password non valida",
  }),
  code: z.optional(z.string()),
});

const UserCreateForm = z.object({
  title: z.optional(z.string()),
  url: z.string().url({ message: "Inserisci un url valido" }),
  subject: z.string().min(1, { message: "Inserisci la materia" }),
  topic: z.string().min(1, { message: "Inserisci l'argomento" }),
});

export { LoginSchema, UserCreateForm };
