"use client"

import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import "@blocknote/core/fonts/inter.css";
import { useCompletion } from "ai/react";
import { useEffect, useState } from "react";
import { BlockNoteView } from "@blocknote/shadcn";
import { insertAiItem } from "@/components/notes/ai";
import { updateNote } from "@/lib/actions/notes/update";
import { BlockNoteEditor, filterSuggestionItems, PartialBlock } from "@blocknote/core";
import { DefaultReactSuggestionItem, getDefaultReactSlashMenuItems, SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";

interface EditorProps {
  id: string;
  initialContent?: string;
  editable?: boolean;
}

type themeType = "light" | "dark";


export default function Editor({
  id,
  initialContent,
  editable
}: EditorProps) {
  const { complete } = useCompletion({
    id: "TH Projects",
    api: "/api/notes/generate",
    onResponse(response) {
      if (response.status === 429 || response.status === 401) {
        return;
      }
      if (response.body) {
        const reader = response.body.getReader();
        let decoder = new TextDecoder();
        reader.read().then(function processText({ done, value }) {
          if (done) {
            return;
          }
          let chunk = decoder.decode(value, { stream: true });
          editor?._tiptapEditor.commands.insertContent(chunk);
          reader.read().then(processText);
        });
      } else {
        console.error('Response body is null');
      }
    },
    onError: (e) => {
      console.error(e.message);
    },
  })

  const [themeState, setThemeState] = useState<"light" | "dark" | undefined>("light");

  const { theme, systemTheme } = useTheme();

  const editor = useCreateBlockNote(
    {
      initialContent:
        initialContent
          ? JSON.parse(initialContent) as PartialBlock[]
          : undefined,

    }
  );

  useEffect(() => {
    theme && setThemeState((theme === "system" ? systemTheme : theme) as themeType)
  }, [theme])

  const getCustomSlashMenuItems = (
    editor: BlockNoteEditor
  ): DefaultReactSuggestionItem[] => [
      insertAiItem(editor, complete),
      ...getDefaultReactSlashMenuItems(editor),
    ];

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => updateNote({
        id,
        document: JSON.stringify(editor.document)
      })}
      theme={themeState}
      editable={editable}
      slashMenu={false}
    >
      <SuggestionMenuController
        triggerCharacter={'/'}
        getItems={async (query) =>
          filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        }
      />
    </BlockNoteView>
  )
}