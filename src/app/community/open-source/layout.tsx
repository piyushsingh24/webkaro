import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/community/open-source", {
  title: "Open Source & Community | Webkaro",
  description: "Explore Webkaro's open source projects, public UI components, and starter templates. We believe in building tools for the developer community.",
});

export default function OpenSourceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
