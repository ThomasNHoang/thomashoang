import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function currentUser() {
  const session = await auth();

  return session?.user;
}

export async function clearStaleTokens() {
  try {
    await prisma.verificationToken.deleteMany({
      where: {
        expires: {
          lt: new Date(),
        },
      },
    });
    // console.log(`${result.count} expired tokens deleted.`)
  } catch (error) {
    console.error("Error deleting expired tokens:", error);
  }
}

export async function currentRole() {
  const session = await auth();

  return session?.user?.role;
}

export function toRoleEnum() {}

export enum Roles {
  USER,
  ADMIN,
  OWNER,
}
