"use client";

import Image from "next/image";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useHeaderContactForm } from "@/Store/useHeaderContactForm";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { useLanguage } from "@/Store/useLanguage";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const { open: openContactForm } = useHeaderContactForm();
  const { language } = useLanguage();

  const t = {
    uk: {
      slideTitle1: "Техніка, що не підводить",
      slideTitle2: "Індивідуально спроектовані рішення",
      contactUs: "зв’язатись з нами",
      sliderAria1: "Показати перший слайд",
      sliderAria2: "Показати другий слайд",
      aboutText:
        "HYLEN – це більше, ніж інженерний бренд. Це надійний партнер для тих, хто рухає країну вперед. З 1979 року ми створюємо техніку, яка не підводить. У кожному міліметрі нашої продукції – досвід і характер. Наша техніка розроблена, щоб бути продовженням сили. Щоб не підвести, коли все тримається на міліметрі.",
      next: "далі",
      customText:
        "Для особливих завдань і нестандартних вимог ми пропонуємо індивідуальні рішення, створені під конкретні потреби клієнта. Наші інженери адаптують конструкції, щоб техніка працювала максимально ефективно та надійно саме у вашому випадку.",
      customListTitle: "Індивідуально спроектованими можуть бути:",
      customList: ["розмір", "форма", "колір", "комплектація"],
    },
    en: {
      slideTitle1: "Machinery that doesn’t let you down",
      slideTitle2: "Custom-engineered solutions",
      contactUs: "contact us",
      sliderAria1: "Show first slide",
      sliderAria2: "Show second slide",
      aboutText:
        "HYLEN is more than an engineering brand. It is a reliable partner for those who move the country forward. Since 1979, we have been creating equipment that never lets you down. In every millimeter of our products – there is experience and character. Our trailers are designed to extend your strength. To hold when everything rests on a millimeter.",
      next: "next",
      customText:
        "For special tasks and unique requirements, we provide customised solutions tailored precisely to your needs. Our engineers refine each design to ensure maximum efficiency and reliability for your specific application.",
      customListTitle: "Custom-designed can be:",
      customList: ["size", "shape", "color", "configuration"],
    },
  } as const;

  const copy = t[language];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolledInside = Math.max(0, -rect.top);
      const maxScrollable = sectionHeight - viewportHeight;

      if (maxScrollable <= 0) {
        setActiveSlide(0);
        return;
      }

      const progress = scrolledInside / maxScrollable;

      if (progress >= 0.5) {
        setActiveSlide(1);
      } else {
        setActiveSlide(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsAnimationReady(true);
    }, 3300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const scrollToSlide = (slideIndex: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.offsetTop;
    const maxScrollable = section.offsetHeight - window.innerHeight;

    if (slideIndex === 0) {
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: sectionTop + maxScrollable,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" ref={sectionRef} id="about">
      <div className="container">
        <video
          className="hero-bg-video"
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Hero/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-left">
          <div className="hero-left-title-wrap">
            <h2
              className={`hero-title ${
                isAnimationReady && activeSlide === 0 ? "visible" : "hidden"
              }`}
            >
              {copy.slideTitle1}
            </h2>
            <h2
              className={`hero-title ${
                isAnimationReady && activeSlide === 1 ? "visible" : "hidden"
              }`}
            >
              {copy.slideTitle2}
            </h2>
          </div>

          <Link
            href={"/contact"}
            className={`hero-contact-us ${isAnimationReady ? "visible" : "hidden"}`}
          >
            <p>{copy.contactUs}</p>
            <IoArrowForward />
          </Link>
        </div>

        <div
          className="hero-right"
          style={{
            alignItems: `${activeSlide === 0 ? "flex-start" : "flex-start"}`,
          }}
        >
          <div className="hero-slider">
            <button
              type="button"
              className={`hero-slide ${activeSlide === 0 ? "active" : ""}`}
              onClick={() => scrollToSlide(0)}
              aria-label={copy.sliderAria1}
            />
            <button
              type="button"
              className={`hero-slide ${activeSlide === 1 ? "active" : ""}`}
              onClick={() => scrollToSlide(1)}
              aria-label={copy.sliderAria2}
            />
          </div>

          <div className="hero-right-text">
            <div
              className={`hero-text ${
                isAnimationReady && activeSlide === 0 ? "visible" : "hidden"
              }`}
            >
              <p>{copy.aboutText}</p>
              <button
                className="hero-right-text-next-button"
                onClick={() => scrollToSlide(1)}
              >
                <p>{copy.next}</p>
                <Image
                  src={"/Hero/next-icon.svg"}
                  width={8}
                  height={6}
                  alt="next"
                />
              </button>
            </div>

            <div
              className={`hero-text ${
                isAnimationReady && activeSlide === 1 ? "visible" : "hidden"
              }`}
            >
              <p>{copy.customText}</p>

              <h3>{copy.customListTitle}</h3>
              <div className="hero-text-second-slide-cards">
                {copy.customList.map((item) => (
                  <div key={item} className="hero-text-second-slide-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
