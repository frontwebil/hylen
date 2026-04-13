"use client";

import Image from "next/image";
import "./style.css";
import { useState } from "react";
import type { AdvantageBlock } from "../advantagesData";

type AdvantagesCardProps = AdvantageBlock;

export function AdvantagesCard({
  index,
  title,
  description,
  benefit,
  defaultOpen = false,
}: AdvantagesCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`advantages-card ${isOpen ? "open" : ""}`}>
      <div className="advantages-card-top" onClick={() => setIsOpen(!isOpen)}>
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
                <strong>Це дає вам:</strong> {benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
