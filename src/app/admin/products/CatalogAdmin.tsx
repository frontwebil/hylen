"use client";

import { ProductCard } from "@/Components/MainPage/Products/ProductCard/ProductCard";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { isEditableCatalogSlug } from "@/lib/catalogSlug";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type CatalogRowView = {
  id: number;
  slug: string;
  titleUk: string;
  titleEn: string;
  subtitleUk: string;
  subtitleEn: string;
  imagePath: string;
  sortOrder: number;
};

export function CatalogAdmin({
  rows,
}: {
  rows: CatalogRowView[];
}) {
  const router = useRouter();

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const [creating, setCreating] = useState(false);
  const [newSlug, setNewSlug] = useState("");
  const [newTitleUk, setNewTitleUk] = useState("");
  const [newTitleEn, setNewTitleEn] = useState("");
  const [newSubUk, setNewSubUk] = useState("");
  const [newSubEn, setNewSubEn] = useState("");
  const [newImg, setNewImg] = useState("/Products/1");

  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  function asCardPreview(r: CatalogRowView): ProductItem {
    const path = r.slug.startsWith("/") ? r.slug : "/" + r.slug;
    return {
      title: r.titleUk,
      subTitle: r.subtitleUk,
      img: r.imagePath,
      link: path,
    };
  }

  async function createRow() {
    setMsg(null);
    const slug = newSlug.trim();
    if (!isEditableCatalogSlug(slug)) {
      setMsg("Slug: лише латинські літери, цифри та дефіс; не використовуйте «admin», «products» тощо.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/catalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          titleUk: newTitleUk.trim(),
          titleEn: newTitleEn.trim(),
          subtitleUk: newSubUk.trim(),
          subtitleEn: newSubEn.trim(),
          imagePath: newImg.trim() || "/Products/1",
          sortOrder: rows.length ? Math.max(...rows.map((r) => r.sortOrder)) + 1 : 0,
        }),
      });
      const j = await res.json().catch(() => null);
      if (!res.ok) {
        setMsg(j?.message ?? "Не вдалося створити запис");
        return;
      }
      setCreating(false);
      setNewSlug("");
      setNewTitleUk("");
      setNewTitleEn("");
      setNewSubUk("");
      setNewSubEn("");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function deleteRow(slug: string) {
    if (!window.confirm(`Прибрати «${slug}» з каталогу на головній? Сторінка /${slug} зникне з меню категорій.`)) {
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/catalog/${slug}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        setMsg("Не вдалося видалити");
        return;
      }
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function saveRowPatch(slug: string, patch: Record<string, string | number>) {
    setMsg(null);
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/catalog/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      const j = await res.json().catch(() => null);
      if (!res.ok) {
        setMsg(j?.message ?? "Збереження не вдалося");
        return;
      }
      setEditingSlug(null);
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="admin-catalog-scope">
      {msg ? <p className="admin-toast error">{msg}</p> : null}

      <header className="admin-catalog-actions">
        {!creating ? (
          <button
            type="button"
            className="admin-mini-btn primary"
            disabled={busy}
            onClick={() => setCreating(true)}
          >
            + Нова лінійка продукту
          </button>
        ) : (
          <div className="admin-catalog-create">
            <h3 className="admin-catalog-create-title">Нова картка в блоці «Продукти» на головній</h3>
            <p className="admin-field-hint" style={{ marginBottom: 12 }}>
              Після створення відкрийте «повний текст сторінки» і заповніть контент — сторінка буде
              доступна за адресою <code>/{'{slug}'}</code> (англійський slug у URL).
            </p>
            <div className="admin-inline-fields">
              <label>
                <span>Slug для URL</span>
                <input
                  placeholder="nova-liniya"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value.toLowerCase())}
                />
              </label>
              <label>
                <span>Зображення (шлях)</span>
                <input value={newImg} onChange={(e) => setNewImg(e.target.value)} />
              </label>
            </div>
            <div className="admin-inline-fields" style={{ marginTop: 10 }}>
              <label>
                <span>Заголовок UA</span>
                <input value={newTitleUk} onChange={(e) => setNewTitleUk(e.target.value)} />
              </label>
              <label>
                <span>Заголовок EN</span>
                <input value={newTitleEn} onChange={(e) => setNewTitleEn(e.target.value)} />
              </label>
            </div>
            <div className="admin-inline-fields" style={{ marginTop: 10 }}>
              <label>
                <span>Підпис UA</span>
                <input value={newSubUk} onChange={(e) => setNewSubUk(e.target.value)} />
              </label>
              <label>
                <span>Підпис EN</span>
                <input value={newSubEn} onChange={(e) => setNewSubEn(e.target.value)} />
              </label>
            </div>
            <div className="admin-catalog-create-buttons">
              <button type="button" className="admin-mini-btn" onClick={() => setCreating(false)}>
                Скасувати
              </button>
              <button
                type="button"
                className="admin-mini-btn primary"
                disabled={busy}
                onClick={() => void createRow()}
              >
                Створити
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="admin-catalog-cards">
        {rows.map((r) => (
          <div key={r.id} className="admin-catalog-unit">
            <div className="admin-catalog-thumb">
              <ProductCard product={asCardPreview(r)} staticPreview />
            </div>
            <div className="admin-catalog-controls">
              <div className="admin-catalog-controls-top">
                <code className="admin-catalog-path">/{r.slug}</code>
                <span className="admin-catalog-order">
                  порядок:{" "}
                  <input
                    key={`${r.slug}-${r.sortOrder}`}
                    type="number"
                    aria-label={`Порядок ${r.slug}`}
                    disabled={busy}
                    defaultValue={r.sortOrder}
                    onBlur={(e) => {
                      const next = Number(e.target.value);
                      if (!Number.isFinite(next)) return;
                      if (next === r.sortOrder) return;
                      void saveRowPatch(r.slug, { sortOrder: next });
                    }}
                  />
                </span>
              </div>
              <div className="admin-catalog-buttons">
                <Link className="admin-mini-btn primary" href={`/admin/products/${r.slug}`}>
                  Повний текст сторінки
                </Link>
                <button
                  type="button"
                  className="admin-mini-btn"
                  onClick={() =>
                    setEditingSlug((prev) => (prev === r.slug ? null : r.slug))
                  }
                >
                  {editingSlug === r.slug ? "Закрити поля картки" : "Змінити картку"}
                </button>
                <button
                  type="button"
                  className="admin-mini-btn danger"
                  disabled={busy}
                  onClick={() => void deleteRow(r.slug)}
                >
                  Прибрати з головної
                </button>
              </div>
              {editingSlug === r.slug ? (
                <CatalogEditForm row={r} busy={busy} onSave={(p) => saveRowPatch(r.slug, p)} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CatalogEditForm({
  row,
  busy,
  onSave,
}: {
  row: CatalogRowView;
  busy: boolean;
  onSave: (p: Record<string, string>) => void;
}) {
  const [titleUk, setTitleUk] = useState(row.titleUk);
  const [titleEn, setTitleEn] = useState(row.titleEn);
  const [subtitleUk, setSubtitleUk] = useState(row.subtitleUk);
  const [subtitleEn, setSubtitleEn] = useState(row.subtitleEn);
  const [imagePath, setImagePath] = useState(row.imagePath);

  return (
    <form
      className="admin-sheet"
      style={{ marginTop: 12 }}
      onSubmit={(e) => {
        e.preventDefault();
        void onSave({
          titleUk,
          titleEn,
          subtitleUk,
          subtitleEn,
          imagePath,
        });
      }}
    >
      <div className="admin-inline-fields">
        <label>
          <span>Заголовок UA</span>
          <input value={titleUk} onChange={(e) => setTitleUk(e.target.value)} disabled={busy} />
        </label>
        <label>
          <span>Заголовок EN</span>
          <input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} disabled={busy} />
        </label>
      </div>
      <div className="admin-inline-fields" style={{ marginTop: 10 }}>
        <label>
          <span>Підпис UA</span>
          <input
            value={subtitleUk}
            onChange={(e) => setSubtitleUk(e.target.value)}
            disabled={busy}
          />
        </label>
        <label>
          <span>Підпис EN</span>
          <input
            value={subtitleEn}
            onChange={(e) => setSubtitleEn(e.target.value)}
            disabled={busy}
          />
        </label>
      </div>
      <div className="admin-inline-fields" style={{ marginTop: 10 }}>
        <label>
          <span>Шлях зображення</span>
          <input value={imagePath} onChange={(e) => setImagePath(e.target.value)} disabled={busy} />
        </label>
      </div>
      <button type="submit" className="admin-mini-btn primary" disabled={busy} style={{ marginTop: 12 }}>
        Зберегти картку
      </button>
    </form>
  );
}
