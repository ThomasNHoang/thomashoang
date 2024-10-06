"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/lib/user";
import { accountSchemaType } from "@/schema";


export async function accountAction(values: accountSchemaType) {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }
  const existingUser = await getUserById(user.id as string);

  if (!existingUser) {
    return { error: "Unauthorized!" };
  }

  delete values.googleConnected;
  delete values.githubConnected;

  await prisma.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      ...values
    }
  })

  return { success: "Account updated" }
}