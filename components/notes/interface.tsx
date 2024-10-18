"use client";

import { useState } from "react";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import { redirect } from "next/navigation";
import { findNoteById } from "@/lib/mockNoteData";
import { Editor } from "@/components/notes/editor";
import { Renderer } from "@/components/notes/renderer";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

export function NotesInterface({ id }: { id: string }) {
  const note = findNoteById(id);

  if (!note) {
    redirect("/notes");
    return;
  }

  const [markdown, setMarkdown] = useState(note.content);

  const onInput = (text: string) => {
    setMarkdown(text);
  }

  return (
    <ResizablePanelGroup direction="vertical" className="w-full min-h-0 grow">
      <ResizablePanel>
        <Renderer markdown={markdown} />
      </ResizablePanel>
      <ResizableHandle>
        <div className="flex items-center justify-center w-full h-full bg-muted">
          <HiOutlineEllipsisHorizontal />
        </div>
      </ResizableHandle>
      <ResizablePanel>
        <Editor markdown={markdown} onInput={onInput} />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}