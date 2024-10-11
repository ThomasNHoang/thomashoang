"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginFormSchema, loginSchemaType } from "@/schema";

export async function emailRegister(values: loginSchemaType) {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email } = validatedFields.data;

  try {
    await signIn("nodemailer", {
      email,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    throw error;
  }
}
