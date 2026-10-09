import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Webkaro",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  // Already signed in as admin? Skip the form.
  const session = await getServerSession(authOptions);
  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Webkaro Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span
              className="text-xl font-bold"
              style={{ color: "#1B1B1B" }}
            >
              WebKaro
            </span>
          </Link>
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#2563EB" }}
          >
            Restricted Area
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
          >
            Admin Access
          </h1>
          <p className="text-sm mt-3" style={{ color: "#656565" }}>
            Sign in with your administrator credentials.
          </p>
        </div>

        <div
          className="p-8 rounded-3xl border"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(0,0,0,0.06)",
            boxShadow:
              "0 8px 24px -8px rgba(0,0,0,0.06), 0 16px 48px -16px rgba(0,0,0,0.08)",
          }}
        >
          <LoginForm />
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#888888" }}>
          Authorized personnel only. All sign-in attempts are rate-limited.
        </p>
      </div>
    </section>
  );
}
