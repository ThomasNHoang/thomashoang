import { prisma } from "@/prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
}

export async function getUserDataById(id: string) {
  try {
    const userData = prisma.userData.findFirst({
      where: {
        userId: id,
      },
    });

    return userData;
  } catch {
    return null;
  }
}
