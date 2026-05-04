"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutAdminButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.replace("/admin/login");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <button type="button" onClick={logout} disabled={pending}>
      {pending ? "Вихід…" : "Вийти"}
    </button>
  );
}
