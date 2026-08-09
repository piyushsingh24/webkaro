import type { Metadata } from "next";

export const siteUrl = "https://www.webkaro.in";

export function createMetadata(
  path: string,
  data: {
    title: string;
    description: string;
    image?: string;
    type?: "website" | "article";
  }
): Metadata {
  const ogImage = data.image || "/logo.png";
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${siteUrl}${path}`,
      siteName: "Webkaro Studio",
      images: [{ url: ogImage, alt: "Webkaro Studio" }],
      locale: "en_IN",
      type: data.type || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [ogImage],
    },
  };
}
