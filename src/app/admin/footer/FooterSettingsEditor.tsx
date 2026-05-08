"use client";

import type { SiteSettings } from "@/lib/siteSettings.shared";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FooterSettingsEditor({ initialSettings }: { initialSettings: SiteSettings }) {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const router = useRouter();

  function setLocale(
    path: "helpTitle" | "payment" | "delivery" | "service" | "returns",
    locale: "uk" | "en",
    value: string,
  ) {
    setSettings((prev) => {
      if (path === "helpTitle") {
        return {
          ...prev,
          footer: { ...prev.footer, helpTitle: { ...prev.footer.helpTitle, [locale]: value } },
        };
      }
      return {
        ...prev,
        footer: {
          ...prev.footer,
          links: {
            ...prev.footer.links,
            [path]: { ...prev.footer.links[path], [locale]: value },
          },
        },
      };
    });
  }

  function setPage(
    page: keyof SiteSettings["pages"],
    field: "title" | "text",
    locale: "uk" | "en",
    value: string,
  ) {
    setSettings((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        [page]: {
          ...prev.pages[page],
          [field]: { ...prev.pages[page][field], [locale]: value },
        },
      },
    }));
  }

  async function save() {
    setMsg(null);
    setBusy(true);
    try {
      const res = await fetch("/api/admin/site-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      const j = await res.json().catch(() => null);
      if (!res.ok) {
        setMsg({ type: "err", text: j?.message ?? "Не вдалося зберегти налаштування." });
        return;
      }
      setMsg({ type: "ok", text: "Налаштування збережено." });
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {msg ? <div className={`admin-toast ${msg.type === "ok" ? "success" : "error"}`}>{msg.text}</div> : null}

      <section className="admin-sheet">
        <h4>Контакти та соцмережі</h4>
        <div className="admin-inline-fields">
          <label>
            <span>Телефон у футері</span>
            <input
              value={settings.footer.phone}
              onChange={(e) =>
                setSettings((prev) => ({ ...prev, footer: { ...prev.footer, phone: e.target.value } }))
              }
            />
          </label>
          <label>
            <span>Facebook URL</span>
            <input
              value={settings.footer.socials.facebook}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  footer: {
                    ...prev.footer,
                    socials: { ...prev.footer.socials, facebook: e.target.value },
                  },
                }))
              }
              placeholder="https://facebook.com/..."
            />
          </label>
        </div>
        <div className="admin-inline-fields" style={{ marginTop: 10 }}>
          <label>
            <span>Instagram URL</span>
            <input
              value={settings.footer.socials.instagram}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  footer: {
                    ...prev.footer,
                    socials: { ...prev.footer.socials, instagram: e.target.value },
                  },
                }))
              }
              placeholder="https://instagram.com/..."
            />
          </label>
        </div>
        <p className="admin-field-hint" style={{ marginTop: 10 }}>
          Якщо URL соцмережі порожній — іконка у футері не показується.
        </p>
      </section>

      <section className="admin-sheet">
        <h4>Заголовки та лінки секції «Допомога» у футері</h4>
        <div className="admin-inline-fields">
          <label>
            <span>Заголовок UA</span>
            <input value={settings.footer.helpTitle.uk} onChange={(e) => setLocale("helpTitle", "uk", e.target.value)} />
          </label>
          <label>
            <span>Заголовок EN</span>
            <input value={settings.footer.helpTitle.en} onChange={(e) => setLocale("helpTitle", "en", e.target.value)} />
          </label>
        </div>
        {(["payment", "delivery", "service", "returns"] as const).map((k) => (
          <div className="admin-inline-fields" style={{ marginTop: 10 }} key={k}>
            <label>
              <span>{k} UA</span>
              <input value={settings.footer.links[k].uk} onChange={(e) => setLocale(k, "uk", e.target.value)} />
            </label>
            <label>
              <span>{k} EN</span>
              <input value={settings.footer.links[k].en} onChange={(e) => setLocale(k, "en", e.target.value)} />
            </label>
          </div>
        ))}
      </section>

      {(["payment", "delivery", "service", "returns"] as const).map((pageKey) => (
        <section key={pageKey} className="admin-sheet">
          <h4>Сторінка: {pageKey}</h4>
          <div className="admin-inline-fields">
            <label>
              <span>Заголовок UA</span>
              <input
                value={settings.pages[pageKey].title.uk}
                onChange={(e) => setPage(pageKey, "title", "uk", e.target.value)}
              />
            </label>
            <label>
              <span>Заголовок EN</span>
              <input
                value={settings.pages[pageKey].title.en}
                onChange={(e) => setPage(pageKey, "title", "en", e.target.value)}
              />
            </label>
          </div>
          <div className="admin-inline-fields" style={{ marginTop: 10 }}>
            <label>
              <span>Текст UA</span>
              <textarea
                value={settings.pages[pageKey].text.uk}
                onChange={(e) => setPage(pageKey, "text", "uk", e.target.value)}
              />
            </label>
            <label>
              <span>Текст EN</span>
              <textarea
                value={settings.pages[pageKey].text.en}
                onChange={(e) => setPage(pageKey, "text", "en", e.target.value)}
              />
            </label>
          </div>
          <p className="admin-field-hint" style={{ marginTop: 8 }}>
            Форматування: <code>**жирний текст**</code>, лінк як <code>[текст](https://...)</code>.
          </p>
        </section>
      ))}

      <div className="admin-toolbar" style={{ marginTop: 16 }}>
        <span className="admin-toolbar-split">
          <button type="button" className="primary" disabled={busy} onClick={() => void save()}>
            {busy ? "Збереження..." : "Зберегти налаштування"}
          </button>
        </span>
      </div>
    </>
  );
}
