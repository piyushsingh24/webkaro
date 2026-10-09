import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Safe Markdown renderer for CMS content.
 * - GitHub-Flavored Markdown (tables, task lists, strikethrough).
 * - Raw HTML is NEVER rendered (no rehype-raw), so untrusted content
 *   cannot inject scripts or markup. Safe by construction.
 * - Styled to the Webkaro editorial system (no global CSS changes).
 */
export default function Markdown({ content }: { content: string }) {
  return (
    <div
      className="cms-markdown text-[15px] leading-[1.8]"
      style={{ color: "#3d3d3d" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              className="text-3xl font-semibold mt-10 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              className="text-2xl font-semibold mt-10 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className="text-xl font-semibold mt-8 mb-3"
              style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-5">{children}</p>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-medium underline decoration-[#6E8E59]/40 underline-offset-4 hover:decoration-[#6E8E59] transition-colors"
              style={{ color: "#2563EB" }}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 space-y-2.5 list-disc pl-6 marker:text-[#6E8E59]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 space-y-2.5 list-decimal pl-6 marker:text-[#6E8E59] marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote
              className="my-6 pl-5 py-1 border-l-2 italic"
              style={{ borderColor: "#6E8E59", color: "#656565" }}
            >
              {children}
            </blockquote>
          ),
          code: ({ children, className }) =>
            className ? (
              <code className="font-mono text-[13px]">{children}</code>
            ) : (
              <code
                className="font-mono text-[13px] px-1.5 py-0.5 rounded-md"
                style={{ backgroundColor: "#F6F3EE", color: "#1B1B1B" }}
              >
                {children}
              </code>
            ),
          pre: ({ children }) => (
            <pre
              className="my-6 p-5 rounded-2xl overflow-x-auto text-[13px] leading-relaxed"
              style={{ backgroundColor: "#1B1B1B", color: "#F6F3EE" }}
            >
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th
              className="text-left px-4 py-3 text-xs uppercase tracking-widest font-semibold"
              style={{ backgroundColor: "#F6F3EE", color: "#1B1B1B" }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-8 border-0 h-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src ?? ""}
              alt={alt ?? ""}
              loading="lazy"
              className="my-6 rounded-2xl w-full object-cover"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
