import { listPublishedPosts } from "@/lib/cms/posts";
import FinalCTA from "@/components/sections/FinalCTA";
import { Suspense } from "react";
import BlogsClient from "./BlogsClient";
import BlogsSkeleton from "./_components/BlogsSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Growth Insights | Webkaro Blog",
  description: "Thought leadership from our collective on performance, design, and building digital products that win. Explore our latest articles on Frontend, Backend, and DevOps.",
  openGraph: {
    title: "Engineering & Growth Insights | Webkaro Blog",
    description: "Deep dives into modern tech stacks, architectural patterns, and product growth strategies.",
    type: "website",
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="pt-56 pb-32">
      <Suspense fallback={<BlogsSkeleton />}>
        <BlogIndexContent />
      </Suspense>
      <FinalCTA />
    </div>
  );
}

async function BlogIndexContent() {
  // Published posts from the CMS (static fallback when DB is unconfigured).
  const blogs = await listPublishedPosts();
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center uppercase tracking-widest text-primary font-bold">Loading Insights...</div>}>
      <BlogsClient blogs={blogs} />
    </Suspense>
  );
}
