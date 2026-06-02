import type { WritingBlock } from "@/types";

interface WritingArticleBodyProps {
  blocks: WritingBlock[];
}

export function WritingArticleBody({ blocks }: WritingArticleBodyProps) {
  return (
    <div className="prose-editorial max-w-2xl">
      {blocks.map((block, index) => {
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-7 border-l-2 border-[var(--accent)] pl-6"
            >
              <p className="italic text-[var(--text)]">&ldquo;{block.text}&rdquo;</p>
            </blockquote>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
