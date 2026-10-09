import TaxonomyManager from "../../_components/TaxonomyManager";

/**
 * Redirect manager (ADMIN-only writes enforced by the API).
 * Manual pairs + auto-created rows from published slug changes.
 */
export default function RedirectsPage() {
  return (
    <TaxonomyManager
      eyebrow="Settings"
      title="Redirects"
      description="Local-path redirects (e.g. retired slugs). Loop-checked on save. Slug changes on published posts create these automatically."
      endpoint="/api/admin/redirects"
      backHref="/admin/settings"
      fields={[
        { key: "fromPath", label: "From path", placeholder: "/blogs/old-slug" },
        { key: "toPath", label: "To path", placeholder: "/blogs/new-slug" },
      ]}
      columns={[
        { key: "fromPath", label: "From" },
        { key: "toPath", label: "To" },
      ]}
    />
  );
}
