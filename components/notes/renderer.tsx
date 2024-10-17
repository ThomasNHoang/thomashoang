import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks"
import ReactMarkdown from "react-markdown";
import remarkFlexibleParagraphs from "remark-flexible-paragraphs";

export function Renderer({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[
        remarkGfm,
        remarkBreaks,
        remarkFlexibleParagraphs,
      ]}
    >
      {markdown}
    </ReactMarkdown>
  );
}
