"use client";

import type {
  NormalHeroCard,
  NormalProductData,
  NormalProductPageData,
  Pair,
} from "@/app/admin/products/form/productPageNormalization";
import { pairLinesToLocaleList } from "@/app/admin/products/form/productPageNormalization";
import { resizedSpecCellsForModels } from "@/app/admin/products/form/resizedSpecCellsForModels";
import React, { useCallback, useMemo, useState } from "react";

type Props = {
  data: NormalProductPageData;
  onChange: (next: NormalProductPageData) => void;
};

function FieldPair({
  label,
  hint,
  pair,
  onChange,
  multiline,
}: {
  label: string;
  hint?: string;
  pair: Pair;
  onChange: (next: Pair) => void;
  multiline?: boolean;
}) {
  const commonUk = {
    value: pair.uk,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...pair, uk: e.target.value }),
  };
  const commonEn = {
    value: pair.en,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...pair, en: e.target.value }),
  };
  return (
    <div className="admin-field-block">
      <div className="admin-field-heading">
        <strong>{label}</strong>
        {hint ? <span className="admin-field-hint">{hint}</span> : null}
      </div>
      <div className="admin-locale-two">
        <div className="admin-locale-stack">
          <span className="admin-locale-caption">Українська</span>
          {multiline ? (
            <textarea rows={5} {...commonUk} />
          ) : (
            <input type="text" {...commonUk} />
          )}
        </div>
        <div className="admin-locale-stack">
          <span className="admin-locale-caption">Англійська</span>
          {multiline ? (
            <textarea rows={5} {...commonEn} />
          ) : (
            <input type="text" {...commonEn} />
          )}
        </div>
      </div>
    </div>
  );
}

function emptyHeroCard(): NormalHeroCard {
  return { id: "card-1", img: "/", subTitle: { uk: "", en: "" } };
}

export function VisualProductEditor({ data, onChange }: Props) {
  const [topTab, setTopTab] = useState<"hero" | number>("hero");

  const setHero = useCallback(
    (patch: Partial<NormalProductPageData["hero"]>) => {
      onChange({ ...data, hero: { ...data.hero, ...patch } });
    },
    [data, onChange],
  );

  const replaceProducts = useCallback(
    (products: NormalProductPageData["products"]) => {
      onChange({ ...data, products });
    },
    [data, onChange],
  );

  const setProduct = useCallback(
    (index: number, next: NormalProductData) => {
      const cp = [...data.products];
      cp[index] = next;
      onChange({ ...data, products: cp });
    },
    [data, onChange],
  );

  const specColumns = useCallback((p: NormalProductData): number => {
    const { uk, en } = pairLinesToLocaleList(p.specs.models);
    return Math.max(1, uk.length, en.length);
  }, []);

  const prodIndex =
    typeof topTab === "number" ? topTab : data.products.length ? 0 : -1;

  const activeProd = prodIndex >= 0 ? data.products[prodIndex] : null;

  const modelHeaders = useMemo(() => {
    if (!activeProd) return { uk: [""], en: [""] };
    return pairLinesToLocaleList(activeProd.specs.models);
  }, [activeProd]);

  function addHeroCard() {
    setHero({
      cards: [...data.hero.cards, emptyHeroCard()],
    });
  }

  function updateHeroCard(i: number, c: NormalHeroCard) {
    const cards = [...data.hero.cards];
    cards[i] = c;
    setHero({ cards });
  }

  function removeHeroCard(i: number) {
    const cards = data.hero.cards.filter((_, idx) => idx !== i);
    setHero({
      cards: cards.length ? cards : [emptyHeroCard()],
    });
  }

  function addProduct() {
    const template: NormalProductData = {
      id: "product-" + (data.products.length + 1),
      title: { uk: "", en: "" },
      modelCards: { uk: "", en: "" },
      isCustomDesign: false,
      video: "",
      videoPreview: "",
      description: {
        about: { uk: "", en: "" },
        purpose: { uk: "", en: "" },
        features: { uk: "", en: "" },
        advantages: { uk: "", en: "" },
      },
      images: ["/"],
      specs: {
        models: { uk: "Модель 1\n", en: "Model 1\n" },
        rows: [],
      },
    };
    replaceProducts([
      ...data.products,
      resizedSpecCellsForModels(template),
    ]);
    setTopTab(data.products.length);
  }

  function removeProduct(i: number) {
    const next = data.products.filter((_, idx) => idx !== i);
    replaceProducts(next);
    setTopTab((t) => {
      if (t === "hero") return t;
      if (typeof t !== "number") return "hero";
      if (t === i) return next.length ? Math.min(i, next.length - 1) : "hero";
      if (t > i) return t - 1;
      return t;
    });
  }

  function addSpecRow(pi: number) {
    const p = data.products[pi];
    const cols = specColumns(p);
    const blankCell: Pair = { uk: "", en: "" };
    const row = {
      label: { uk: "", en: "" } satisfies Pair,
      cellValues: Array.from({ length: cols }, () => ({ ...blankCell })),
    };
    setProduct(pi, {
      ...p,
      specs: {
        ...p.specs,
        rows: [...p.specs.rows, row],
      },
    });
  }

  function removeSpecRow(pi: number, rowIdx: number) {
    const p = data.products[pi];
    setProduct(pi, {
      ...p,
      specs: {
        ...p.specs,
        rows: p.specs.rows.filter((_, j) => j !== rowIdx),
      },
    });
  }

  function updateModelsPair(pi: number, pair: Pair) {
    const p = data.products[pi];
    setProduct(
      pi,
      resizedSpecCellsForModels({
        ...p,
        specs: { ...p.specs, models: pair },
      }),
    );
  }

  function updateSpecCell(
    pi: number,
    rowIdx: number,
    colIdx: number,
    part: keyof Pair,
    value: string,
  ) {
    const p = data.products[pi];
    const rows = p.specs.rows.map((row, ri) => {
      if (ri !== rowIdx) return row;
      const cv = [...row.cellValues];
      const cell = { ...(cv[colIdx] ?? { uk: "", en: "" }) };
      cell[part] = value;
      cv[colIdx] = cell;
      return { ...row, cellValues: cv };
    });
    setProduct(pi, { ...p, specs: { ...p.specs, rows } });
  }

  function setImages(pi: number, lines: string[]) {
    const p = data.products[pi];
    setProduct(pi, { ...p, images: lines });
  }

  return (
    <div className="admin-visual-root">
      <div className="admin-subtabs" role="tablist">
        <button
          type="button"
          data-active={topTab === "hero"}
          onClick={() => setTopTab("hero")}
        >
          Верх блоку (герой і картки)
        </button>
        {data.products.map((prod, idx) => (
          <button
            key={prod.id}
            type="button"
            data-active={topTab === idx}
            onClick={() => setTopTab(idx)}
          >
            <span className="admin-tab-title">
              Продукт {idx + 1}: {prod.title.uk?.trim() || "без назви"}
            </span>
          </button>
        ))}
        <button type="button" className="admin-mini-btn primary" onClick={addProduct}>
          + Продукт
        </button>
      </div>

      {topTab === "hero" ? (
        <>
          <p className="admin-panel-intro">
            Тут задаються тексти та прев’ю у верхній частині сторінки категорії.
            Значення «breadcrumb» використовує сайт навігаційно під заголовком.
          </p>

          <FieldPair
            label="Назва-крихта (breadcrumb)"
            hint="Зазвичай короткий ідентифікатор лінії, як на сайті в хлібній крошці."
            pair={data.hero.breadcrums}
            onChange={(p) => setHero({ breadcrums: p })}
          />

          <FieldPair
            label="Головний заголовок (великими літерами)"
            pair={data.hero.title}
            onChange={(p) => setHero({ title: p })}
          />

          <FieldPair
            label="Підзаголовок категорії"
            hint="Рядок під головним заголовком категорії."
            pair={data.hero.subTitle}
            onChange={(p) => setHero({ subTitle: p })}
          />

          <FieldPair
            label="Вступний текст"
            hint="Головний абзац опису всій категорії."
            pair={data.hero.text}
            multiline
            onChange={(p) => setHero({ text: p })}
          />

          <p className="admin-muted-title" style={{ marginTop: "1.5rem" }}>
            Прев&apos;ю-картки (слайди зверху)
          </p>
          <p className="admin-field-hint" style={{ marginBottom: 12 }}>
            Кожна картка містить посилання на зображення та короткий підпис. Поле «ID»
            використовує сторінка для якірних посилань на конкретний продукт нижче.
          </p>

          {data.hero.cards.map((c, idx) => (
            <article key={`${idx}-${c.id}`} className="admin-card-sheet">
              <header>
                <h4>Картка {idx + 1}</h4>
                <button
                  type="button"
                  className="admin-mini-btn danger"
                  onClick={() => removeHeroCard(idx)}
                >
                  Видалити
                </button>
              </header>
              <div className="admin-inline-fields" style={{ marginBottom: 12 }}>
                <label>
                  <span>ID якоря</span>
                  <input
                    value={c.id}
                    onChange={(e) =>
                      updateHeroCard(idx, { ...c, id: e.target.value })
                    }
                  />
                </label>
                <label>
                  <span>Шлях до фото або webp</span>
                  <input
                    value={c.img}
                    onChange={(e) =>
                      updateHeroCard(idx, { ...c, img: e.target.value })
                    }
                  />
                </label>
              </div>
              <FieldPair
                label="Текст на картці"
                hint="Короткий підпис моделі або лінії."
                pair={c.subTitle}
                multiline
                onChange={(p) => updateHeroCard(idx, { ...c, subTitle: p })}
              />
            </article>
          ))}

          <button type="button" className="admin-mini-btn primary" onClick={addHeroCard}>
            + Додати картку
          </button>
        </>
      ) : activeProd !== null ? (
        <>
          <p className="admin-panel-intro">
            Опис однієї конкретної моделі нижче на сторінці: галерея, відео, тексти та таблиця
            характеристик. Поле «ID» збігається з превʼю-карткою з блоку вище, коли ставите якір.
          </p>

          <div className="admin-sheet" style={{ marginBottom: 16 }}>
            <header>
              <h4>Структура продукту</h4>
              <button
                type="button"
                className="admin-mini-btn danger"
                onClick={() => removeProduct(prodIndex)}
              >
                Видалити продукт
              </button>
            </header>
            <label className="admin-field-block">
              <span className="admin-field-heading">
                <strong>Внутрішній ID якоря</strong>
              </span>
              <input
                value={activeProd.id}
                onChange={(e) =>
                  setProduct(prodIndex, {
                    ...activeProd,
                    id: e.target.value,
                  })
                }
                style={{
                  padding: "9px 11px",
                  borderRadius: 8,
                  border: "1px solid rgba(192,200,198,0.18)",
                  background: "rgba(10,14,9,0.55)",
                  color: "inherit",
                  marginTop: 6,
                }}
              />
            </label>

            <FieldPair
              label="Публічна назва продукту"
              hint="Великий заголовок блоку опису моделі на сторінці."
              pair={activeProd.title}
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  title: p,
                })
              }
            />

            <FieldPair
              label="Ярлики моделей (малі картки в блоці)"
              hint="По одному рядку — одна вкладка/якірка між схожими варіантами."
              pair={activeProd.modelCards}
              multiline
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  modelCards: p,
                })
              }
            />

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 8,
              }}
            >
              <input
                type="checkbox"
                checked={activeProd.isCustomDesign}
                onChange={(e) =>
                  setProduct(prodIndex, {
                    ...activeProd,
                    isCustomDesign: e.target.checked,
                  })
                }
              />
              <span style={{ fontSize: "0.875rem" }}>Індивідуальний проект (показує виноску)</span>
            </label>

            <div className="admin-inline-fields" style={{ marginTop: 16 }}>
              <label>
                <span>Відео (шлях .mp4)</span>
                <input
                  value={activeProd.video}
                  onChange={(e) =>
                    setProduct(prodIndex, {
                      ...activeProd,
                      video: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <span>Прев’ю відео (webp / jpg)</span>
                <input
                  value={activeProd.videoPreview}
                  onChange={(e) =>
                    setProduct(prodIndex, {
                      ...activeProd,
                      videoPreview: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            <h4 style={{ margin: "22px 0 8px", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              Тексти опису моделі
            </h4>
            <FieldPair
              label="Про продукт (about)"
              multiline
              pair={activeProd.description.about}
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  description: {
                    ...activeProd.description,
                    about: p,
                  },
                })
              }
            />
            <FieldPair
              label="Призначення"
              hint="Для яких задач підходить ця машина."
              multiline
              pair={activeProd.description.purpose}
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  description: {
                    ...activeProd.description,
                    purpose: p,
                  },
                })
              }
            />
            <FieldPair
              label="Ключові можливості / функції"
              multiline
              pair={activeProd.description.features}
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  description: {
                    ...activeProd.description,
                    features: p,
                  },
                })
              }
            />
            <FieldPair
              label="Маркери переваг (список)"
              hint="Кожний пункт окремим рядком; українська та англійська колонки синхронні по номеру рядка."
              multiline
              pair={activeProd.description.advantages}
              onChange={(p) =>
                setProduct(prodIndex, {
                  ...activeProd,
                  description: {
                    ...activeProd.description,
                    advantages: p,
                  },
                })
              }
            />

            <h4 style={{ margin: "22px 0 8px", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              Галерея зображень
            </h4>
            <p className="admin-field-hint" style={{ marginBottom: 10 }}>
              Кожен шлях на новому рядку; порядок відповідає свайперу галереї.
            </p>
            <textarea
              rows={4}
              value={activeProd.images.join("\n")}
              onChange={(e) =>
                setImages(
                  prodIndex,
                  e.target.value.split(/\r?\n/).map((x) => x.trim()),
                )
              }
              style={{
                width: "100%",
                padding: 11,
                borderRadius: 8,
                border: "1px solid rgba(192,200,198,0.18)",
                background: "rgba(10,14,9,0.55)",
                color: "inherit",
                fontFamily: "inherit",
              }}
            />

            <h4 style={{ margin: "26px 0 8px", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
              Технічні характеристики (таблиця на сайті)
            </h4>
            <p className="admin-field-hint" style={{ marginBottom: 10 }}>
              Поле нижче задає заголовки колонок («моделі»). Число рядків тут = число колонок у
              решті таблиці. Після редагування кількість автоматично підстроюється.
            </p>
            <FieldPair
              label="Заголовки колонок (моделі)"
              multiline
              pair={activeProd.specs.models}
              onChange={(p) => updateModelsPair(prodIndex, p)}
            />

            <div style={{ marginTop: 12 }}>
              {activeProd.specs.rows.map((row, ri) => {
                const cols = Math.max(
                  modelHeaders.uk.length,
                  modelHeaders.en.length,
                  1,
                );
                const cells =
                  row.cellValues.length >= cols
                    ? row.cellValues.slice(0, cols)
                    : [
                        ...row.cellValues,
                        ...Array.from({ length: cols - row.cellValues.length }).map(
                          () => ({ uk: "", en: "" } as Pair),
                        ),
                      ];

                function patchRowLabel(patch: Pair) {
                  const cur = data.products[prodIndex];
                  if (!cur) return;
                  const rows = cur.specs.rows.map((r, j) =>
                    j === ri ? { ...r, label: patch } : r,
                  );
                  setProduct(prodIndex, {
                    ...cur,
                    specs: { ...cur.specs, rows },
                  });
                }

                return (
                  <article key={ri} className="admin-sheet" style={{ marginBottom: 14 }}>
                    <header>
                      <h4>Рядок таблиці {ri + 1}</h4>
                      <button
                        type="button"
                        className="admin-mini-btn danger"
                        onClick={() => removeSpecRow(prodIndex, ri)}
                      >
                        Видалити рядок
                      </button>
                    </header>

                    <FieldPair
                      label="Назва параметра у специфікації"
                      hint="Такий самий параметр побачите в лівій колонці на сайті (две мови)."
                      pair={row.label}
                      multiline
                      onChange={patchRowLabel}
                    />

                    <p className="admin-muted-title" style={{ marginTop: 12 }}>
                      Значення по колонках (моделях)
                    </p>
                    <p className="admin-field-hint" style={{ marginBottom: 10 }}>
                      Для чисел і однакового тексту у двох мовах заповнюйте тільки українське поле —
                      текст піде на сайті як простий рядок. Якщо переклади різні, заповніть обидва.
                    </p>

                    <div className="admin-spec-cells-flow">
                      {cells.map((cell, ci) => {
                        const uaName = modelHeaders.uk[ci]?.trim();
                        const enName = modelHeaders.en[ci]?.trim();
                        const subtitle =
                          [uaName || null, enName || null].filter(Boolean).join(" • ") ||
                          `Колонка ${ci + 1}`;
                        return (
                          <div key={ci} className="admin-spec-cell-box">
                            <span className="caps">{subtitle}</span>
                            <textarea
                              rows={2}
                              aria-label={`UA значення моделі ${ci + 1}`}
                              placeholder="Українською або спільне значення"
                              value={cell.uk}
                              onChange={(e) =>
                                updateSpecCell(
                                  prodIndex,
                                  ri,
                                  ci,
                                  "uk",
                                  e.target.value,
                                )
                              }
                            />
                            <textarea
                              rows={2}
                              style={{ marginTop: 8 }}
                              aria-label={`EN моделі ${ci + 1}`}
                              placeholder="English (за потреби)"
                              value={cell.en}
                              onChange={(e) =>
                                updateSpecCell(
                                  prodIndex,
                                  ri,
                                  ci,
                                  "en",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>

            <button type="button" className="admin-mini-btn primary" onClick={() => addSpecRow(prodIndex)}>
              + Рядок характеристики
            </button>
          </div>

          <p className="admin-vis-footer-hint">
            Підказка: числа або однакові значення UA/EN на сайті зазвичай показує як простий текст. Якщо
            мовні формулювання різні, заповнюйте обидва підписи окремо.
          </p>
        </>
      ) : (
        <p>На цій категорії ще немає продуктів — додайте перший чорновик через кнопку «+ Продукт».</p>
      )}
    </div>
  );
}
