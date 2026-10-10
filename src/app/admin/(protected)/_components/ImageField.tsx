"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { uploadImageFile, isCloudinaryConfigured } from "@/lib/cloudinary";

/**
 * Image field: manual URL paste + optional Cloudinary upload.
 * Uploads use an UNSIGNED preset, so no secret ever touches the browser —
 * only NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME/_UPLOAD_PRESET are needed.
 * Without those configured, the URL input still works (upload hidden).
 */
export default function ImageField({
  value,
  onChange,
  invalid,
  placeholder = "/images/... or https://...",
}: {
  value: string;
  onChange: (url: string) => void;
  invalid?: boolean;
  placeholder?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const canUpload = isCloudinaryConfigured();

  const upload = async (file: File) => {
    setUploading(true);
    try {
      onChange(await uploadImageFile(file));
      toast.success("Image uploaded.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      {value.trim() !== "" && (
        <div className="relative w-full max-w-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Preview"
            className="w-full h-32 object-cover rounded-xl border"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Remove image"
            className="absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "flex-1 h-12 px-4 rounded-xl border text-sm transition-all duration-200 focus:outline-none"
          )}
          style={{
            backgroundColor: "#FAF8F5",
            borderColor: invalid ? "#DC2626" : "rgba(0,0,0,0.06)",
            color: "#1B1B1B",
          }}
        />
        {canUpload ? (
          <>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void upload(f);
              }}
            />
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center justify-center gap-2 px-4 h-12 rounded-xl text-xs font-bold border whitespace-nowrap transition-colors duration-200 disabled:opacity-60"
              style={{ borderColor: "rgba(0,0,0,0.1)", color: "#2563EB" }}
            >
              <UploadCloud className="w-4 h-4" />
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </>
        ) : (
          <p className="text-[11px] self-center shrink-0" style={{ color: "#888888" }}>
            Add Cloudinary keys to enable uploads.
          </p>
        )}
      </div>
    </div>
  );
}
