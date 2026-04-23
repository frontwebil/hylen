"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import "./style.css";

const PEOPLE_HYLEN_TEXT =
  "Ми віримо, що найпотужніший ресурс – це люди. HYLEN – це команда інженерів, зварювальників, логістів, управлінців та водіїв, об’єднана спільною метою: створювати техніку, яка допомагає іншим бути сильнішими.";

export function PeopleHylen() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const words = useMemo(() => PEOPLE_HYLEN_TEXT.split(" "), []);
  const lettersCount = useMemo(
    () =>
      Array.from(PEOPLE_HYLEN_TEXT).filter((letter) => letter !== " ").length,
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
    <section className="people-hylen" ref={sectionRef}>
      <div className="people-hylen-sticky">
        <div className="people-hylen-container">
          <div className="people-hylen-text">
            <p>Люди HYLEN</p>
            <h2 className="people-hylen-title">
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
                      className="people-hylen-letter-stack"
                      style={
                        {
                          "--overlay-opacity": overlayOpacity,
                          "--overlay-scale": overlayScale,
                        } as CSSProperties
                      }
                    >
                      <span className="people-hylen-letter-base">{letter}</span>
                      <span className="people-hylen-letter-overlay">
                        {letter}
                      </span>
                    </span>
                  );
                };

                return words.map((word, wordIndex) => (
                  <span key={`word-${wordIndex}`} className="people-hylen-word">
                    {Array.from(word).map((letter, letterIndex) =>
                      renderLetter(
                        letter,
                        `${wordIndex}-${letterIndex}-${letter}`,
                      ),
                    )}
                    {wordIndex < words.length - 1 ? (
                      <span className="people-hylen-space" aria-hidden="true" />
                    ) : null}
                  </span>
                ));
              })()}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
