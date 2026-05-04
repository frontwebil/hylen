"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginClient() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const j: unknown = await res.json().catch(() => null);
      const ok =
        j &&
        typeof j === "object" &&
        "ok" in j &&
        Boolean((j as { ok?: unknown }).ok);
      if (!res.ok || !ok) {
        setError(
          j &&
          typeof j === "object" &&
          "message" in j &&
          typeof (j as { message?: unknown }).message === "string"
            ? (j as { message: string }).message
            : "Не вдалося увійти",
        );
        return;
      }
      router.replace("/admin/products");
      router.refresh();
    } catch {
      setError("Мережева помилка");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="admin-form " onSubmit={onSubmit}>
      <input
        id="admin_pw"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? <p className="admin-form-error">{error}</p> : null}
      <button type="submit" disabled={loading}>
        {loading ? "Вхід…" : "Увійти"}
      </button>
    </form>
  );
}
