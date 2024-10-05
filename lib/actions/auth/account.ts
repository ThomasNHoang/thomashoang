import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";

async function getUserId() {
  const user = await currentUser();

  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }

  return { userId: user.id, email: user.email };
}

async function checkLinkedAccount(provider: string) {
  const { userId, email } = await getUserId();

  try {
    const result = await prisma.account.findFirst({
      where: {
        provider,
        userId
      }
    });
    return !!result;
  } catch (error) {
    console.error(`Failed to check if user ${email} has ${provider} account linked`, error);
    return false;
  }
}

async function unlinkAccount(provider: string) {
  const { userId, email } = await getUserId();

  try {
    const result = await prisma.account.deleteMany({
      where: {
        provider,
        userId
      }
    });
    return !!result;
  } catch (error) {
    console.error(`Failed to unlink ${email}'s ${provider} account`, error);
    return false;
  }
}

export async function linkedGoogleAccount() {
  return await checkLinkedAccount("google");
}

export async function unlinkGoogleAccount() {
  return await unlinkAccount("google");
}

export async function linkedGithubAccount() {
  return await checkLinkedAccount("github");
}

export async function unlinkGithubAccount() {
  return await unlinkAccount("github");
}
