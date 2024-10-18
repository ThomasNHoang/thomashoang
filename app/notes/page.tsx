import dynamic from "next/dynamic";
 
const Editor = dynamic(() => import("@/components/notes/editor"), { ssr: false });

export default function NotesPage() {
  return (
    <div>
      <Editor/>
    </div>
  )
}