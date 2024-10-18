"use client";

import { Textarea } from "@/components/ui/textarea";

interface EditorProps {
  markdown: string;
  onInput: (value: string) => void;
}

export function Editor({ markdown, onInput }: EditorProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = markdown.substring(0, start) + '\t' + markdown.substring(end);
      onInput(newValue);
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      });
    }
  };

  return (
    <Textarea
      className="w-full h-full border-none outline-none resize-none rounded-none text-base p-0 [&::-webkit-scrollbar]:w-2"
      value={markdown}
      onChange={(e) => onInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Enter your markdown here..."
    />
  );
}