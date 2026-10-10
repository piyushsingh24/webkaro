import TaxonomyManager from "../../_components/TaxonomyManager";

export default function BlogAuthorsPage() {
  return (
    <TaxonomyManager
      eyebrow="Blogs"
      title="Authors"
      description="Bylines for posts. Posts without an author show “Webkaro Collective”."
      endpoint="/api/admin/authors"
      backHref="/admin/blogs"
      fields={[
        { key: "name", label: "Name", placeholder: "Jane Doe" },
        { key: "role", label: "Role", placeholder: "Senior Engineer" },
        { key: "avatar", label: "Avatar", image: true },
      ]}
      columns={[
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
      ]}
    />
  );
}
