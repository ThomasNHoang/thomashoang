import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({message: "Please enter a valid email address"})
});

export type loginSchemaType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z.string().email({message: "Please enter a valid email address"})
});

export type registerSchemaType = z.infer<typeof registerFormSchema>;