"use client";

import "./style.css";
import { ADVANTAGES_BLOCKS } from "./advantagesData";
import { AdvantagesCard } from "./AdvantagesCard/AdvantagesCard";
import { useMemo, useState } from "react";

export function Advantages() {
  const initialOpenId = useMemo(
    () => ADVANTAGES_BLOCKS.find((block) => block.defaultOpen)?.id ?? null,
    []
  );
  const [openCardId, setOpenCardId] = useState<string | null>(initialOpenId);

  const handleToggle = (cardId: string) => {
    setOpenCardId((currentOpenId) => (currentOpenId === cardId ? null : cardId));
  };

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages-top">
          <h3 className="advantages-top-title">Переваги HYLEN</h3>
          <p className="advantages-top-text">
            Знаємо, що головне — це надійність, простота в користуванні і
            впевненість, що техніка не підведе у вирішальний момент. Пропонуємо
            техніку, яка допомагає долати важке. Бо тільки ми вміємо вбудовувати
            силу в кожен шов і кожен продукт. <br /><br /> Ми створюємо техніку, на яку можна
            покластися. І це не просто слова – це результат чіткої системи
            рішень, які дають реальні переваги нашим клієнтам:
          </p>
        </div>
        <div className="advantages-cards">
          {ADVANTAGES_BLOCKS.map((block) => (
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
