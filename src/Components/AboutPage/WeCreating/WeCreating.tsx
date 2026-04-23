"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import "./style.css";

const WE_CREATING_TEXT =
  "МИ СТВОРИЛИ HYLEN – ДЛЯ ЛЮДЕЙ СПРАВИ. ДЛЯ ТИХ, ХТО ПРАЦЮЄ В ПОЛІ, НА СКЛАДІ, У МАЙСТЕРНІ ЧИ НА ВИРОБНИЦТВІ. ДЛЯ ТИХ, ХТО ЗАХИЩАЄ КРАЇНУ І РУХАЄ ЇЇ ВПЕРЕД. ДЛЯ ТИХ, ХТО МАЄ СПРАВУ З ТЕХНІКОЮ ЩОДНЯ І ХОЧЕ ОДНОГО, ЩОБ ЦЯ ТЕХНІКА БУЛА НАДІЙНОЮ І ПРАЦЮВАЛА ВІДМІННО.";

const WE_CREATING_TAGS = [
  { label: "ФЕРМЕРИ", top: "50%", left: "14%", start: 0.12 },
  { label: "ВОДІЇ", top: "50%", left: "58%", start: 0.2 },
  {
    label: "МЕХАНІЗАТОРИ",
    top: "58%",
    left: "36%",
    start: 0.3,
  },
  { label: "МАЙСТРИ", top: "63%", left: "20%", start: 0.46 },
  { label: "ВІЙСЬКОВІ", top: "62%", left: "78%", start: 0.38 },
  { label: "УПРАВЛІНЦІ", top: "72%", left: "36%", start: 0.62 },
  { label: "ЛОГІСТИ", top: "67%", left: "60%", start: 0.54 },
] as const;

export function WeCreating() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const words = useMemo(() => WE_CREATING_TEXT.split(" "), []);
  const lettersCount = useMemo(
    () =>
      Array.from(WE_CREATING_TEXT).filter((letter) => letter !== " ").length,
    [],
  );

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const maxScrollableDistance = Math.max(rect.height - viewport, 1);
      const nextProgress = Math.min(
        Math.max(-rect.top / maxScrollableDistance, 0),
        1,
      );

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

  return (
    <section className="we-creating" ref={sectionRef}>
      <div className="we-creating-sticky">
        <div className="container">
          <h2 className="we-creating-title">
            {(() => {
              let visibleLetterIndex = -1;

              const renderLetter = (letter: string, key: string) => {
                visibleLetterIndex += 1;
                const letterStart = visibleLetterIndex / lettersCount;
                const letterEnd = (visibleLetterIndex + 1) / lettersCount;
                const localProgress = Math.min(
                  Math.max(
                    (progress - letterStart) / (letterEnd - letterStart),
                    0,
                  ),
                  1,
                );
                const overlayOpacity = localProgress;
                const overlayScale = 0.86 + localProgress * 0.14;

                return (
                  <span
                    key={key}
                    className="we-creating-letter-stack"
                    style={
                      {
                        "--overlay-opacity": overlayOpacity,
                        "--overlay-scale": overlayScale,
                      } as CSSProperties
                    }
                  >
                    <span className="we-creating-letter-base">{letter}</span>
                    <span className="we-creating-letter-overlay">{letter}</span>
                  </span>
                );
              };

              return words.map((word, wordIndex) => (
                <span key={`word-${wordIndex}`} className="we-creating-word">
                  {Array.from(word).map((letter, letterIndex) =>
                    renderLetter(
                      letter,
                      `${wordIndex}-${letterIndex}-${letter}`,
                    ),
                  )}
                  {wordIndex < words.length - 1 ? (
                    <span className="we-creating-space" aria-hidden="true" />
                  ) : null}
                </span>
              ));
            })()}
          </h2>
        </div>
      </div>

      <div className="we-creating-tags" aria-hidden="true">
        {WE_CREATING_TAGS.map((tag) => (
          <span
            key={tag.label}
            className="we-creating-tag"
            style={
              {
                top: tag.top,
                left: tag.left,
              } as CSSProperties
            }
          >
            {tag.label}
          </span>
        ))}
      </div>
    </section>
  );
}
