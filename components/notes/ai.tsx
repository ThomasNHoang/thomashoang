import { ImMagicWand } from "react-icons/im";
import { BlockNoteEditor } from "@blocknote/core";

export function insertAiItem(editor: BlockNoteEditor, complete: (prompt: string, options?: {headers?: Record<string, string> | Headers; body?: object;}) => Promise<string | null | undefined>) {
  return {
    title: 'Insert Text',
    onItemClick: async () => {
      const prevText = editor._tiptapEditor.state.doc.textBetween(
        Math.max(0, editor._tiptapEditor.state.selection.from - 5000),
        editor._tiptapEditor.state.selection.from,
        '\n'
      );

      complete(prevText)
    },
    aliases: ['autocomplete', 'ai'],
    group: 'AI',
    icon: <ImMagicWand size={18} />,
    subtext: 'Continue your note with AI-generated text',
  }
};