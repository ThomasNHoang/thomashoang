import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

export type loginSchemaType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

export type registerSchemaType = z.infer<typeof registerFormSchema>;

export const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["inter", "geist"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
})

export type appearanceSchemaType = z.infer<typeof appearanceFormSchema>

export const accountFormSchema = z.object({
  name: z.string(),
  googleConnected: z.boolean().default(false).optional(),
  githubConnected: z.boolean().default(false).optional(),
})

export type accountSchemaType = z.infer<typeof accountFormSchema>
