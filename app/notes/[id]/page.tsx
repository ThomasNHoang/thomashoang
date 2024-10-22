import dynamic from "next/dynamic";
import { getNote } from "@/lib/actions/notes/get";

const Editor = dynamic(() => import("@/components/notes/editor"), { ssr: false });

export default async function NotesPage({ params }: { params: { id: string } }) {
  const result = await getNote(params.id);
  if (!result) return <>Not Found</>
  if ('error' in result) {
    return <>{result.error}</>; // Handle error case
  }

  const note = result.document;

  return (
    <div>
      <Editor id={result.id} initialContent={note} editable={false}/>
    </div>
  )
}