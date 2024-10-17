import { redirect } from "next/navigation";
import { findNoteById } from "@/lib/mockNoteData";
import { Renderer } from "@/components/notes/renderer";

export function NotesPreview({ id }: { id: string }) {
  const note = findNoteById(id);

  if (!note) {
    redirect("/notes");
    return;
  }

  return (
    <>
      <Renderer markdown={note.content}/>
    </>
  )
}