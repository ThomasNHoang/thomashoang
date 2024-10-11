import { prisma } from "@/prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { userData: true },
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
      include: { userData: true },
    });
    return user;
  } catch {
    return null;
  }
}
