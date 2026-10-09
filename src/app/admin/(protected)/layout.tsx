import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import SignOutButton from "./SignOutButton";
import AdminNav from "./AdminNav";

export const metadata: Metadata = {
  title: "Admin | Webkaro",
  // Admin pages must never appear in search results.
  robots: { index: false, follow: false },
};

/**
 * Server-side authorization boundary for /admin*.
 * Every page under /admin inherits this guard — no client-only protection.
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/admin/login?callbackUrl=%2Fadmin");
  }

  return (
    <div
      className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* Sidebar */}
      <aside
        className="border-b lg:border-b-0 lg:border-r lg:min-h-screen p-6 flex lg:flex-col gap-6 lg:sticky lg:top-0 lg:h-screen"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <Link href="/admin" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Webkaro Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span>
            <span
              className="block text-base font-bold leading-tight"
              style={{ color: "#1B1B1B" }}
            >
              WebKaro
            </span>
            <span
              className="block text-[10px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "#6E8E59" }}
            >
              Admin
            </span>
          </span>
        </Link>

        <AdminNav />

        <div className="lg:mt-auto hidden lg:block">
          <Link
            href="/"
            className="text-xs font-semibold transition-colors duration-300 hover:opacity-70"
            style={{ color: "#2563EB" }}
          >
            ← View public website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="min-w-0">
        <header
          className="flex items-center justify-between gap-4 px-6 md:px-10 py-4 border-b"
          style={{ backgroundColor: "#FAF8F5", borderColor: "rgba(0,0,0,0.06)" }}
        >
          <div className="min-w-0">
            <p
              className="text-xs uppercase tracking-[0.2em] font-semibold"
              style={{ color: "#888888" }}
            >
              Signed in
            </p>
            <p
              className="text-sm font-semibold truncate"
              style={{ color: "#1B1B1B" }}
            >
              {session.user.name ?? session.user.email}
            </p>
          </div>
          <SignOutButton />
        </header>
        <main className="px-6 md:px-10 py-8 md:py-12 max-w-5xl">{children}</main>
      </div>
    </div>
  );
}
