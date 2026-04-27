"use client";

import Image from "next/image";
import "./style.css";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function UniqHylen() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const cards = useMemo(
    () => ({
      left: [
        {
          title: "[01]",
          text: "У HYLEN немає випадкових рішень. Ми не створюємо «чергову техніку» –ми створюємо рішення, які працюють у реальному житті",
        },
        {
          title: "[02]",
          text: "Ми закладаємо витривалість ще на етапі креслення. Ми зварюємо характеру кожен шов",
        },
        {
          title: "[03]",
          text: "І кожен наш продукт – це результат повного виробничого циклу",
        },
      ],
      right: [
        {
          title: "[01]",
          text: "Наш підхід – це поєднання інженерної точності, виробничого досвіду та глибокого розуміння того, як має працювати надійна техніка",
        },
        {
          title: "[02]",
          text: "Ми створюємо не просто конструкції, а механіку інстинкту – техніку, яка підлаштовується під реальні умови, а не під ідеальні сценарії",
        },
        {
          title: "[03]",
          text: "Результат, який ми контролюємо від першого металевого листа до готового причепа",
        },
      ],
    }),
    [],
  );

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const maxScrollableDistance = Math.max(rect.height - viewport, 1);
      const nextProgress = clamp01(-rect.top / maxScrollableDistance);
      setProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const eased = easeOutCubic(progress);

  const cardStyle = (index: number, column: "left" | "right") => {
    // Opacity follows the vertical progress line:
    // when the line reaches the "row" => the text is already fully visible.
    // Centers tuned for 3 rows layout: ~top, middle, bottom.
    const centers = [0.2, 0.5, 0.8] as const;
    const center = centers[index] ?? (index + 1) / 4;
    const fadeWindow = 0.34; // longer window => more gradual fade

    const start = Math.max(0, center - fadeWindow);
    const end = center;
    const local = clamp01((eased - start) / Math.max(end - start, 0.001));
    const opacity = 0.15 + easeInOutCubic(local) * 0.85;

    return {
      ["--card-opacity" as never]: opacity.toFixed(3),
    } as CSSProperties;
  };

  return (
    <>
      <section
        className="uniq-hylen"
        ref={sectionRef}
        style={
          {
            ["--uniq-progress" as never]: eased.toFixed(4),
          } as CSSProperties
        }
      >
        <h2 className="uniq-hylen-title">Унікальність HYLEN</h2>
        <div className="uniq-hylen-sticky">
          <div className="container">
            <div className="uniq-hylen-top">
              <div className="uniq-hylen-top-left-progress-line" />
              <div className="uniq-hylen-top-logo">
                <Image
                  src={"/icons/uniq-logo.svg"}
                  width={70}
                  height={45}
                  alt="Hylen"
                />
              </div>
              <div className="uniq-hylen-top-right-progress-line" />
            </div>
            <div className="uniq-hylen-content">
              <div className="uniq-hylen-content-left-column">
                {cards.left.map((card, index) => (
                  <div
                    key={`left-${card.title}-${index}`}
                    className="uniq-hylen-content-card"
                    style={cardStyle(index, "left")}
                  >
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
              <div className="uniq-hylen-content-middle-progressline-container">
                <div className="uniq-hylen-content-middle-progressline" />
              </div>
              <div className="uniq-hylen-content-right-column">
                {cards.right.map((card, index) => (
                  <div
                    key={`right-${card.title}-${index}`}
                    className="uniq-hylen-content-card"
                    style={cardStyle(index, "right")}
                  >
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="uniq-hylen-top-line">
        <div className="container">
          <div className="uniq-hylen-top-line-left"></div>
          <div className="uniq-hylen-top-line-right"></div>
        </div>
      </div>
      <div className="uniq-hylen-bottom-line">
        <div className="container">
          <div className="uniq-hylen-bottom-line-center"></div>
        </div>
      </div>
    </>
  );
}
