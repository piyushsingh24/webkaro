import TaxonomyManager from "../../_components/TaxonomyManager";

export default function BlogTagsPage() {
  return (
    <TaxonomyManager
      eyebrow="Blogs"
      title="Tags"
      description="Lightweight labels attached to posts."
      endpoint="/api/admin/blog-tags"
      backHref="/admin/blogs"
      fields={[
        { key: "name", label: "Name", placeholder: "Next.js" },
        { key: "slug", label: "Slug", placeholder: "nextjs" },
      ]}
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
      ]}
    />
  );
}
