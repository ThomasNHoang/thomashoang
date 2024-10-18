import { NotesInterface } from "@/components/notes/interface";

export default function PreviewPage({ params }: { params: { id: string } }) {
  return <NotesInterface id={params.id}/>
}