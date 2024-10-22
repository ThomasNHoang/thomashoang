"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";
import { getUserById, getUserDataById } from "@/lib/user";

const initalContent = JSON.stringify([{
  type: "paragraph",
  content: "Hello World",
}])

export async function createNote() {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const existingUser = await getUserById(user.id as string);

  if (!existingUser) {
    return { error: "Unauthorized!" };
  }

  const userData = await getUserDataById(existingUser.id)

  if (!userData) {
    return { error: "Something went wrong!" }
  }

  try {
    const result = await prisma.note.create({
      data: {
        userDataId: userData.id,
        document: initalContent
      }
    })

    return { noteId: result.id }
  } catch (error) {
    console.log(error);
    return;
  }
}