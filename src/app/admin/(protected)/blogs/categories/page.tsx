import TaxonomyManager from "../../_components/TaxonomyManager";

export default function BlogCategoriesPage() {
  return (
    <TaxonomyManager
      eyebrow="Blogs"
      title="Categories"
      description="Organize posts. hubSlug optionally links a category to an existing hub route (e.g. frontend for /blogs/frontend)."
      endpoint="/api/admin/blog-categories"
      backHref="/admin/blogs"
      fields={[
        { key: "name", label: "Name", placeholder: "Engineering" },
        { key: "slug", label: "Slug", placeholder: "engineering" },
        { key: "hubSlug", label: "Hub slug (optional)", placeholder: "frontend" },
        { key: "description", label: "Description", textarea: true },
        { key: "sortOrder", label: "Order", number: true },
      ]}
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "hubSlug", label: "Hub" },
      ]}
    />
  );
}
