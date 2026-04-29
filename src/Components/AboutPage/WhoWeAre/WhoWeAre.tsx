"use client";

import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

export function WhoWeAre() {
  const { language } = useLanguage();

  const t = {
    uk: {
      title: "Ми не обіцяємо – ми робимо",
      rows: [
        "Ми вбудовуємо в техніку те, що справді важливо: витривалість, міцність, логіку дії",
        "HYLEN народився з потреб реальних людей і виріс із практики, а не з теорії",
        "Історія HYLEN – це історія \nруху вперед",
        "У нашій ДНК – робоча надійність і технологічна чесність",
      ],
    },
    en: {
      title: "We do not make false promises – we deliver results",
      rows: [
        "Endurance, strength, and logic are embedded in every product we create.",
        "HYLEN was born from real-world experience, not out of abstract ideas.",
        "HYLEN’s history is defined by progress:\nevolving, and driving the future forward.",
        "It’s a brand built on operational reliability and technological integrity.",
      ],
    },
  } as const;

  const copy = t[language];

  return (
    <section className="who-we-are">
      <div className="container">
        <div className="who-we-are-row left-img">
          <div className="who-we-are-row-img first"></div>
          <div className="who-we-are-text">
            <h2 className="who-we-are-title">{copy.title}</h2>
          </div>
        </div>
        <div className="who-we-are-row right-img">
          <div className="who-we-are-row-img second"></div>
          <div className="who-we-are-text">
            <p>{copy.rows[0]}</p>
          </div>
        </div>
        <div className="who-we-are-row left-img">
          <div className="who-we-are-row-img third"></div>
          <div className="who-we-are-text">
            <p>{copy.rows[1]}</p>
          </div>
        </div>
        <div className="who-we-are-row right-img">
          <div className="who-we-are-row-img four"></div>
          <div className="who-we-are-text">
            <p>
              {copy.rows[2].split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < copy.rows[2].split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="who-we-are-row left-img">
          <div className="who-we-are-row-img fivth"></div>
          <div className="who-we-are-text">
            <p>{copy.rows[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
