"use client";

import { Button } from "@/components/ui/button";
import { createNote } from "@/lib/actions/notes/create";
import { useRouter } from "next/navigation";

export function CreateNewNote() {
  const router = useRouter();

  async function onClick() {
    const result = await createNote();
    if (result?.noteId) {
      router.push(`/notes/${result.noteId}`)
    }
  }

  return (
    <Button onClick={onClick}>
      Create new note
    </Button>
  )
}