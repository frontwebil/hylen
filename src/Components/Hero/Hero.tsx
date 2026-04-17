"use client";

import Image from "next/image";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useHeaderContactForm } from "@/Store/useHeaderContactForm";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const { open: openContactForm } = useHeaderContactForm();

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
    <section className="hero" ref={sectionRef}>
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
              Техніка, що не підводить
            </h2>
            <h2
              className={`hero-title ${
                isAnimationReady && activeSlide === 1 ? "visible" : "hidden"
              }`}
            >
              Індивідуально спроектовані рішення
            </h2>
          </div>

          <button
            type="button"
            className={`hero-contact-us ${isAnimationReady ? "visible" : "hidden"}`}
            onClick={openContactForm}
          >
            <p>зв’язатись з нами</p>
            <Image src={"/Header/arrow.svg"} width={14} height={15} alt="=>" />
          </button>
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
              aria-label="Показати перший слайд"
            />
            <button
              type="button"
              className={`hero-slide ${activeSlide === 1 ? "active" : ""}`}
              onClick={() => scrollToSlide(1)}
              aria-label="Показати другий слайд"
            />
          </div>

          <div className="hero-right-text">
            <div
              className={`hero-text ${
                isAnimationReady && activeSlide === 0 ? "visible" : "hidden"
              }`}
            >
              <p>
                HYLEN – це більше, ніж інженерний бренд. Це надійний партнер для
                тих, хто рухає країну вперед. З 1979 року ми створюємо техніку,
                яка не підводить. У кожному міліметрі нашої продукції – досвід і
                характер. Наша техніка розроблена, щоб бути продовженням сили.
                Щоб не підвести, коли все тримається на міліметрі.
              </p>
              <button
                className="hero-right-text-next-button"
                onClick={() => scrollToSlide(1)}
              >
                <p>далі</p>
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
              <p>
                Для особливих завдань і нестандартних вимог ми пропонуємо
                індивідуальні рішення, створені під конкретні потреби клієнта.
                Наші інженери адаптують конструкції, щоб техніка працювала
                максимально ефективно та надійно саме у вашому випадку.
              </p>

              <h3>Індивідуально спроектованими можуть бути:</h3>
              <div className="hero-text-second-slide-cards">
                <div className="hero-text-second-slide-card">розмір</div>
                <div className="hero-text-second-slide-card">форма</div>
                <div className="hero-text-second-slide-card">комплектація</div>
                <div className="hero-text-second-slide-card">колір</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
