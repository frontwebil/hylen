"use client";

import {
  type NormalProductPageData,
  toDto,
  toNormal,
} from "@/app/admin/products/form/productPageNormalization";
import { VisualProductEditor } from "@/app/admin/products/form/VisualProductEditor";
import type { ProductPageData } from "@/Types/productData";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Props = {
  slug: string;
  initialJson: string;
  fallbackPretty: string;
  hadDatabaseCopy: boolean;
};

function stringifyDto(p: ProductPageData): string {
  return JSON.stringify(p, null, 2) + "\n";
}

export function ProductAdminEditor({
  slug,
  initialJson,
  fallbackPretty,
  hadDatabaseCopy,
}: Props) {
  const router = useRouter();

  const baselineParsed = useMemo(
    (): ProductPageData => JSON.parse(initialJson) as ProductPageData,
    [initialJson],
  );

  const baselineNorm = useMemo(
    () => toNormal(baselineParsed),
    [baselineParsed],
  );

  const [panel, setPanel] = useState<"visual" | "json">("visual");

  const [normalized, setNormalized] =
    useState<NormalProductPageData>(baselineNorm);

  const [jsonDraft, setJsonDraft] = useState(() => stringifyDto(baselineParsed));

  useEffect(() => {
    try {
      const dto = JSON.parse(initialJson) as ProductPageData;
      setNormalized(toNormal(dto));
      setJsonDraft(stringifyDto(dto));
    } catch {
      /* ignore */
    }
  }, [initialJson]);

  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(
    null,
  );
  const [busy, setBusy] = useState(false);

  const baselineJsonPrinted = useMemo(() => stringifyDto(baselineParsed), [baselineParsed]);

  const dirty = useMemo(() => {
    try {
      const cur =
        panel === "json"
          ? (JSON.parse(jsonDraft) as ProductPageData)
          : toDto(normalized);
      return JSON.stringify(cur) !== JSON.stringify(baselineParsed);
    } catch {
      return panel === "json" && jsonDraft.trim() !== baselineJsonPrinted.trim();
    }
  }, [panel, jsonDraft, normalized, baselineParsed, baselineJsonPrinted]);

  function goVisual() {
    try {
      setNormalized(toNormal(JSON.parse(jsonDraft) as ProductPageData));
      setPanel("visual");
      setMessage(null);
    } catch {
      setMessage({
        type: "err",
        text: "Не вийде перейти: у JSON синтаксична помилка — виправте її в цьому режимі.",
      });
    }
  }

  function goJson() {
    setJsonDraft(stringifyDto(toDto(normalized)));
    setPanel("json");
    setMessage(null);
  }

  async function save() {
    setMessage(null);
    let dto: ProductPageData;
    try {
      dto =
        panel === "json"
          ? (JSON.parse(jsonDraft) as ProductPageData)
          : toDto(normalized);
    } catch {
      setMessage({
        type: "err",
        text:
          panel === "json"
            ? "Не вдалося розпарсити JSON перед збереженням."
            : "Внутрішня структура даних пошкоджена.",
      });
      return;
    }

    setBusy(true);
    try {
      const res = await fetch(`/api/admin/product-pages/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dto }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => null);
        setMessage({
          type: "err",
          text:
            j && typeof j === "object" && "message" in j
              ? String((j as { message?: unknown }).message)
              : `Помилка збереження (${res.status})`,
        });
        return;
      }
      setMessage({ type: "ok", text: "Збережено в базі. Оновлюємо…" });
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function clearDatabaseCopy() {
    if (
      typeof window !== "undefined" &&
      !window.confirm(
        "Прибрати збережені в базі дані для цієї сторінки? На сайті знову покажуться дані з репозиторію.",
      )
    ) {
      return;
    }

    setMessage(null);
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/product-pages/${slug}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        setMessage({ type: "err", text: "Не вдалося скинути запис" });
        return;
      }

      try {
        const dto = JSON.parse(fallbackPretty) as ProductPageData;
        setNormalized(toNormal(dto));
        setJsonDraft(stringifyDto(dto));
      } catch {
        /** ignore */
      }
      setMessage({
        type: "ok",
        text: "Запис у базі видалено. Використовуються дані з репозиторію.",
      });
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {message ? (
        <div className={`admin-toast ${message.type === "ok" ? "success" : "error"}`}>
          {message.text}
        </div>
      ) : null}

      <div className="admin-toolbar" style={{ marginBottom: 16 }}>
        <span className="muted">
          {hadDatabaseCopy
            ? "У базі є збережена копія — саме вона показується на сайті."
            : "У базі немає копії — на сайті йдуть дані з репозиторію."}
          {dirty ? " • є незбережені зміни" : ""}
        </span>
        <span className="admin-toolbar-split">
          {hadDatabaseCopy ? (
            <button type="button" onClick={clearDatabaseCopy} disabled={busy}>
              Скинути базу
            </button>
          ) : null}
          <button type="button" className="primary" onClick={() => void save()} disabled={busy}>
            {busy ? "Зачекайте…" : "Зберегти в базу"}
          </button>
        </span>
      </div>

      <div className="admin-segment" role="tablist">
        <button
          type="button"
          data-active={panel === "visual"}
          onClick={() => (panel === "json" ? goVisual() : setPanel("visual"))}
        >
          Зрозумілий редактор
        </button>
        <button
          type="button"
          data-active={panel === "json"}
          onClick={() => (panel === "visual" ? goJson() : void 0)}
        >
          Сирий JSON
        </button>
      </div>

      {panel === "visual" ? (
        <>
          <p className="admin-panel-intro">
            Поля згруповано за блоками на живому сайті: верх («герой», картки) і кожний продукт
            нижче. Дві колонки — українська та англійська сторінка.
          </p>
          <VisualProductEditor data={normalized} onChange={setNormalized} />
        </>
      ) : (
        <>
          <p className="admin-json-help">
            Повний JSON сторінки — для складних або масових правок. Щоб повернутися до форм без
            помилок у синтаксисі, перевірте JSON та натисніть «Зрозумілий редактор».
          </p>
          <div className="admin-json">
            <textarea
              value={jsonDraft}
              onChange={(e) => setJsonDraft(e.target.value)}
              spellCheck={false}
            />
          </div>
        </>
      )}
    </>
  );
}
