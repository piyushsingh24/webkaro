"use client";

import dynamic from "next/dynamic";
import { commands } from "@uiw/react-md-editor";
import toast from "react-hot-toast";
import { uploadImageFile, isCloudinaryConfigured } from "@/lib/cloudinary";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl border px-4 py-10 text-center text-sm"
      style={{
        backgroundColor: "#FAF8F5",
        borderColor: "rgba(0,0,0,0.06)",
        color: "#888888",
      }}
    >
      Loading editor...
    </div>
  ),
});

/** Upload helper shared by editor + field uploads (Cloudinary unsigned). */
export { uploadImageFile, isCloudinaryConfigured };

const cloudinaryImageCommand: commands.ICommand = {
  name: "cloudinary-image",
  keyCommand: "cloudinary-image",
  buttonProps: { "aria-label": "Upload image to Cloudinary" },
  icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  execute: (_state, api) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const toastId = toast.loading("Uploading image...");
      try {
        const url = await uploadImageFile(file);
        api.replaceSelection(`![${file.name.replace(/\]/g, "")}](${url})`);
        toast.success("Image inserted.", { id: toastId });
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Upload failed.", { id: toastId });
      }
    };
    input.click();
  },
};

const hasCloudinary = isCloudinaryConfigured();

/**
 * Rich Markdown editor (bold, headings, lists, links, code…) for CMS
 * long-text fields. Stores standard Markdown — existing content loads
 * unchanged and the public site keeps rendering via react-markdown
 * (raw HTML is never rendered, so output stays XSS-safe).
 */
export default function RichTextEditor({
  value,
  onChange,
  height = 420,
}: {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}) {
  return (
    <div data-color-mode="light">
      <MDEditor
        value={value}
        onChange={(v) => onChange(v ?? "")}
        height={height}
        preview="live"
        visibleDragbar={false}
        extraCommands={hasCloudinary ? [cloudinaryImageCommand] : []}
      />
    </div>
  );
}
