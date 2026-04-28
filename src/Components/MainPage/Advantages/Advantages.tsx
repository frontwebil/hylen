"use client";

import "./style.css";
import { ADVANTAGES_BLOCKS_BY_LANG } from "./advantagesData";
import { AdvantagesCard } from "./AdvantagesCard/AdvantagesCard";
import { useMemo, useState } from "react";
import { useLanguage } from "@/Store/useLanguage";

export function Advantages() {
  const { language } = useLanguage();
  const blocks = ADVANTAGES_BLOCKS_BY_LANG[language];

  const t = {
    uk: {
      title: "Переваги HYLEN",
      text: (
        <>
          Знаємо, що головне — це надійність, простота в користуванні і
          впевненість, що техніка не підведе у вирішальний момент. Пропонуємо
          техніку, яка допомагає долати важке. Бо тільки ми вміємо вбудовувати
          силу в кожен шов і кожен продукт. <br />
          <br /> Ми створюємо техніку, на яку можна покластися. І це не просто
          слова – це результат чіткої системи рішень, які дають реальні переваги
          нашим клієнтам:
        </>
      ),
    },
    en: {
      title: "HYLEN advantages",
      text: (
        <>
          We know what matters: reliability, simplicity, and the confidence that
          your trailer won’t quit when it matters most. We build tools that help
          you tackle the hard stuff. Because only we know how to weld strength
          into every seam — and every product.
          <br />
          <br />
          We build equipment you can trust – backed by real solutions that
          deliver real benefits to our customers:
        </>
      ),
    },
  } as const;

  const copy = t[language];

  const initialOpenId = useMemo(
    () => blocks.find((block) => block.defaultOpen)?.id ?? null,
    [blocks]
  );
  const [openCardId, setOpenCardId] = useState<string | null>(initialOpenId);

  const handleToggle = (cardId: string) => {
    setOpenCardId((currentOpenId) => (currentOpenId === cardId ? null : cardId));
  };

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages-top">
          <h3 className="advantages-top-title">{copy.title}</h3>
          <p className="advantages-top-text">{copy.text}</p>
        </div>
        <div className="advantages-cards">
          {blocks.map((block) => (
            <AdvantagesCard
              key={block.id}
              {...block}
              isOpen={openCardId === block.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
