"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";
import { getUserById, getUserDataById } from "@/lib/user";

type Note = {
  id: string;
  document: string;
}

export async function updateNote(note: Note) {
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
    await prisma.note.update({
      where: {
        id: note.id
      },
      data: {
        document: note.document,
        userDataId: userData.id,
      }
    })
    return true;
  } catch {
    return false;
  }
}