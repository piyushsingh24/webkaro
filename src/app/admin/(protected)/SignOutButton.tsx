"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const [busy, setBusy] = useState(false);

  return (
    <button
      type="button"
      disabled={busy}
      onClick={() => {
        setBusy(true);
        // Clears the session cookie and lands back on the login page.
        void signOut({ callbackUrl: "/admin/login" });
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 hover:border-[#6E8E59] disabled:opacity-60"
      style={{ borderColor: "rgba(0,0,0,0.08)", color: "#656565" }}
    >
      <LogOut className="w-3.5 h-3.5" />
      {busy ? "Signing out..." : "Sign out"}
    </button>
  );
}
