import { findNoteById } from "@/lib/mockNoteData";

export function NotesPreview({ id }: { id: string }) {
  const note = findNoteById(id);

  return (
    <>
      {note?.content}
    </>
  )
}