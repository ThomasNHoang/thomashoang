"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/lib/user";
import { redirect } from "next/navigation";
import { onboardingFormSchema, onboardingSchemaType } from "@/schema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function onboardingAction(
  values: onboardingSchemaType,
  callbackUrl?: string,
) {
  const validatedFields = onboardingFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }
  const existingUser = await getUserById(user.id as string);

  if (!existingUser) {
    return { error: "Unauthorized!" };
  }

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      ...values,
    },
  });

  redirect(callbackUrl || DEFAULT_LOGIN_REDIRECT);
  return { success: "Account updated" };
}
