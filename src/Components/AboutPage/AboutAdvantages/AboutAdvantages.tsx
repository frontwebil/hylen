"use client";

import Image from "next/image";
import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

export function AboutAdvantages() {
  const { language } = useLanguage();

  const t = {
    uk: [
      "Це надійний партнер для тих, хто рухає країну вперед",
      "З 1979 року ми створюємо техніку, яка не підводить",
      "У кожному міліметрі нашої продукції – досвід і характер",
    ],
    en: [
      "It is a trusted partner for those who move the world forward – in the field, on the front lines, or in manufacturing.",
      "Since 1979, we have set the standard for reliability.",
      "Our equipment isn’t just built – it’s forged from experience and the strength of our character.",
    ],
  } as const;

  const copy = t[language];

  return (
    <section className="about-advantages">
      <div className="container">
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/1.svg"}
              width={55}
              height={55}
              alt="❤️"
            />
          </div>
          <p>{copy[0]}</p>
        </div>
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/2.svg"}
              width={55}
              height={55}
              alt="🛡️"
            />
          </div>
          <p>{copy[1]}</p>
        </div>
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/3.svg"}
              width={55}
              height={55}
              alt="✏️"
            />
          </div>
          <p>{copy[2]}</p>
        </div>
      </div>
    </section>
  );
}
