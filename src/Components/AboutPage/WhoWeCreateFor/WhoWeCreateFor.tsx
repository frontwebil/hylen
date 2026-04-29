"use client";

import Image from "next/image";
import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

export function WhoWeCreateFor() {
  const { language } = useLanguage();

  const t = {
    uk: {
      text: (
        <>
          Фермери, механізатори, водії, майстри, логісти, управлінці, військові –
          саме для них ми створюємо HYLEN. <br />
          <br />
          Ми добре розуміємо потреби цих людей, бо самі з цього середовища.
          Знаємо, що головне – це надійність, простота в користуванні і
          впевненість, що техніка не підведе у вирішальний момент.
        </>
      ),
      bottomTitle: "Тому HYLEN – без зайвого. Тільки те, що справді потрібно",
    },
    en: {
      text: (
        <>
          We create HYLEN for farmers, machine operators, drivers, repair
          specialists, logistics experts, managers, and military personnel.{" "}
          <br />
          <br />
          We understand these people because we come from the same world. We
          know that what truly matters is reliability, ease of use, and the
          confidence that the equipment won’t fail when it counts.
        </>
      ),
      bottomTitle:
        "That’s why HYLEN is stripped of the unnecessary – delivering only what you really need.",
    },
  } as const;

  const copy = t[language];

  return (
    <>
      <div className="who-we-create-for-top-lines">
        <div className="container">
          <div className="who-we-create-for-top-line-left"></div>
          <div className="who-we-create-for-top-line-right"></div>
        </div>
      </div>
      <section className="who-we-create-for">
        <div className="container">
          <div className="who-we-create-for-flex">
            <p className="who-we-create-for-flex-text">
              {copy.text}
            </p>
            <div className="who-we-create-for-flex-row">
              <Image
                src={"/AboutPage/WhoWeCreateFor/icon.svg"}
                width={80}
                height={50}
                alt="Hylen"
              />
              <h2>{copy.bottomTitle}</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="who-we-create-for-bottom-lines">
        <div className="container">
          <div className="who-we-create-for-bottom-line-left"></div>
          <div className="who-we-create-for-bottom-line-right"></div>
        </div>
      </div>
      <div className="who-we-create-for-underbottom-lines">
        <div className="container">
          <div className="who-we-create-for-underbottom-line-left"></div>
          <div className="who-we-create-for-underbottom-line-right"></div>
        </div>
      </div>
    </>
  );
}
