/**
 * Cloudinary unsigned uploads (browser-safe: no secret required).
 * Requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME +
 * NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET (unsigned preset, folder webkaro).
 */

export const CLOUDINARY_MAX_BYTES = 10 * 1024 * 1024;

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  );
}

export async function uploadImageFile(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !preset) {
    throw new Error("Cloudinary upload is not configured.");
  }
  if (!file.type.startsWith("image/")) throw new Error("Choose an image file.");
  if (file.size > CLOUDINARY_MAX_BYTES) throw new Error("Image must be under 10 MB.");
  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", preset);
  body.append("folder", "webkaro");
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body }
  );
  const json = (await res.json().catch(() => ({}))) as {
    secure_url?: string;
    error?: { message?: string };
  };
  if (!res.ok || !json.secure_url) {
    throw new Error(json.error?.message ?? "Upload failed.");
  }
  return json.secure_url;
}
