import ReactMarkdown from "react-markdown";

// https://docs.astro.build/en/recipes/tailwind-rendered-markdown/
// https://stackoverflow.com/questions/75706164/problem-with-tailwind-css-when-using-the-react-markdown-component
export function Markdown({ markdown }: { markdown: string }) {
  return (
    <>
      <div className="prose-auto">
        <ReactMarkdown
          components={{
            img: ({ ...props }) => <img {...props} className="rounded-lg" />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </>
  );
}
