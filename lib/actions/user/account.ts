"use server";

import { prisma } from "@/prisma";
import { currentUser } from "@/lib/auth";

async function getUserId() {
  const user = await currentUser();

  if (!user || !user.id) {
    return { error: "Unauthorized!" };
  }

  return { userId: user.id, email: user.email };
}

async function checkLinkedAccount(provider: string) {
  const { userId, error } = await getUserId();
  if (error) {
    throw new Error(error);
  }

  try {
    const result = await prisma.account.findFirstOrThrow({
      where: {
        provider,
        userId
      }
    });
    return !!result;
  } catch {
    // console.log(`${email} does not have ${provider} linked`);
    return false;
  }
}

async function unlinkAccount(provider: string) {
  const { userId, error } = await getUserId();
  if (error) {
    throw new Error(error);
  }

  try {
    const result = await prisma.account.deleteMany({
      where: {
        provider,
        userId
      }
    });
    return !!result;
  } catch {
    // console.error(`Failed to unlink ${email}'s ${provider} account`, error);
    return false;
  }
}

export async function linkedGoogleAccount() {
  try {
    const result = await checkLinkedAccount("google");
    return result;
  } catch (error) {
    throw error;
  }
}

export async function unlinkGoogleAccount() {
  try {
    await unlinkAccount("google");
  } catch (error) {
    throw error;
  }
}

export async function linkedGithubAccount() {
  try {
    const result = await checkLinkedAccount("github");
    return result;
  } catch (error) {
    throw error;
  }
}

export async function unlinkGithubAccount() {
  try {
    await unlinkAccount("github");
  } catch (error) {
    throw error;
  }
}
