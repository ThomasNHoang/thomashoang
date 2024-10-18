"use client"

import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import "@blocknote/core/fonts/inter.css";
import { useEffect, useState } from "react";
import { BlockNoteView } from "@blocknote/shadcn";
import { PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

interface EditorProps {
  onChange?: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const defaultContent = [
  {
    type: "paragraph",
    content: "Welcome to this demo!",
  },
  {
    type: "paragraph",
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Blocks:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: "Paragraph",
  },
  {
    type: "heading",
    content: "Heading",
  },
  {
    type: "bulletListItem",
    content: "Bullet List Item",
  },
  {
    type: "numberedListItem",
    content: "Numbered List Item",
  },
  {
    type: "checkListItem",
    content: "Check List Item",
  },
  {
    type: "table",
    content: {
      type: "tableContent",
      rows: [
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
      ],
    },
  },
  {
    type: "file",
  },
  {
    type: "image",
    props: {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      caption:
        "From https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    },
  },
  {
    type: "video",
    props: {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      caption:
        "From https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    },
  },
  {
    type: "audio",
    props: {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
      caption:
        "From https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
  },
  {
    type: "paragraph",
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Inline Content:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Styled Text",
        styles: {
          bold: true,
          italic: true,
          textColor: "red",
          backgroundColor: "blue",
        },
      },
      {
        type: "text",
        text: " ",
        styles: {},
      },
      {
        type: "link",
        content: "Link",
        href: "https://www.blocknotejs.org",
      },
    ],
  },
  {
    type: "paragraph",
  },
]

type themeType = "light" | "dark";


export default function Editor({
  onChange,
  initialContent,
  editable
}: EditorProps) {
  onChange = onChange || function(){};

  const [themeState, setThemeState] = useState<"light" | "dark" | undefined>("light");

  const { theme, systemTheme } = useTheme();

  const editor = useCreateBlockNote(
    {
      initialContent:
        initialContent
          ? JSON.parse(initialContent) as PartialBlock[]
          : defaultContent as PartialBlock[],

    }
  );

  useEffect(() => {
    theme && setThemeState((theme === "system" ? systemTheme : theme) as themeType)
  }, [theme])

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => onChange(
        JSON.stringify(
          editor.document
        )
      )}
      theme={themeState}
      editable={editable}
    />
  )
}