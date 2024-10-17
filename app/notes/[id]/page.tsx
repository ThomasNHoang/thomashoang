import { NotesPreview } from "@/components/notes/preview";

export default function PreviewPage({ params }: { params: { id: string } }) {
  return <NotesPreview id={params.id}/>
}