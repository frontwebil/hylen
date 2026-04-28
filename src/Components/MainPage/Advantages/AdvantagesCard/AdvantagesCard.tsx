"use client";

import Image from "next/image";
import "./style.css";
import type { AdvantageBlock } from "../advantagesData";
import { useLanguage } from "@/Store/useLanguage";

type AdvantagesCardProps = AdvantageBlock & {
  isOpen: boolean;
  onToggle: (cardId: string) => void;
};

export function AdvantagesCard({
  id,
  index,
  title,
  description,
  benefit,
  isOpen,
  onToggle,
}: AdvantagesCardProps) {
  const { language } = useLanguage();
  const benefitLabel = language === "en" ? "Your benefits:" : "Це дає вам:";

  return (
    <div className={`advantages-card ${isOpen ? "open" : ""}`}>
      <div className="advantages-card-top" onClick={() => onToggle(id)}>
        <div className="advantages-card-top-left">
          <div className="advantages-card-top-left-count">[{index}]</div>
          <h2>{title}</h2>
        </div>

        <div className={`product-card-plus ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="advantages-card-content">
        <div className="advantages-card-content-inner">
          <div className="advantages-card-content-flex">
            <p className="advantages-card-content-left-text">{description}</p>

            <div className="advantages-card-content-right">
              <Image
                src={"/Advantages/icon.svg"}
                width={28}
                height={28}
                alt=""
              />
              <p>
                <strong>{benefitLabel}</strong> {benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
