"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";
import { getUserById, getUserDataById } from "@/lib/user";

export async function getNote(id: string) {
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
    const note = await prisma.note.findUnique({
      where: {
        id
      }
    })
    return note;
  } catch {
    return;
  }
}

export async function getAllNotes() {
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
    const notes = await prisma.note.findMany({
      where: {
        userDataId: userData.id
      }
    })

    return { notes };
  } catch {
    return;
  }
}

