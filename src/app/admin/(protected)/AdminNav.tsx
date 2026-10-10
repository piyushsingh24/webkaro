"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  Newspaper,
  Star,
  CircleHelp,
  Settings,
  Inbox,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Inbox },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/faqs", label: "FAQs", icon: CircleHelp },
  { href: "/admin/settings", label: "Settings", icon: Settings },
  { href: "/admin/users", label: "Users", icon: Users },
];

const soon = ["SEO"];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin"
      className="flex lg:flex-col gap-1 overflow-x-auto"
    >
      {links.map((link) => {
        const active = link.exact
          ? pathname === link.href
          : pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors duration-200",
              active
                ? "font-semibold"
                : "hover:opacity-70"
            )}
            style={
              active
                ? { backgroundColor: "#F4F7F1", color: "#1B1B1B" }
                : { color: "#656565" }
            }
          >
            <link.icon
              className="w-4 h-4"
              style={{ color: active ? "#6E8E59" : "#888888" }}
            />
            {link.label}
          </Link>
        );
      })}
      {soon.map((label) => (
        <span
          key={label}
          title="Available in a later phase"
          className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap cursor-not-allowed"
          style={{ color: "#888888", opacity: 0.6 }}
        >
          {label}
          <span className="text-[10px] uppercase tracking-widest font-semibold">
            Soon
          </span>
        </span>
      ))}
    </nav>
  );
}
