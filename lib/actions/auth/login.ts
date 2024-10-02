"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function emailLogin(email: string) {
  try {
    await signIn(
      "nodemailer", {
        email,
        redirectTo: DEFAULT_LOGIN_REDIRECT
      }
    )
  } catch (error) {
    throw error;
  }
}