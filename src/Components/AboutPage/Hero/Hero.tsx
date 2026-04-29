"use client";

import Image from "next/image";
import "./style.css";
import { IoMdArrowDropright } from "react-icons/io";
import { useLanguage } from "@/Store/useLanguage";

export function Hero() {
  const { language } = useLanguage();

  const t = {
    uk: {
      topLabel: "про бренд",
      bottomLead: (
        <>
          – це більше, ніж <br /> інженерний бренд
        </>
      ),
    },
    en: {
      topLabel: "about HYLEN",
      bottomLead: (
        <>
          is more than just <br /> an engineering company
        </>
      ),
    },
  } as const;

  const copy = t[language];

  return (
    <section className="about-hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="about-hero-video"
        preload="auto"
      >
        <source src="/AboutPage/Hero/main.mp4" type="video/mp4" />
      </video>
      <div className="about-hero-text">
        <div className="container">
          <div className="about-hero-text-top">
            <IoMdArrowDropright />
            <p>{copy.topLabel}</p>
          </div>
          <Image
            src={"/AboutPage/Hero/Hero-img.svg"}
            width={10000}
            height={3000}
            className="about-hero-text-img"
            alt="HYLEN"
          />
          <div className="about-hero-text-bottom">
            <p>–</p>
            <p>{copy.bottomLead}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
