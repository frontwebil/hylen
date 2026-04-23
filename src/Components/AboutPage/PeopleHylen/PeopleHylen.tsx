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

const PEOPLE_HYLEN_PHOTOS = [
  { src: "/AboutPage/PeopleHylen/1.png", top: "28%", left: "74%", start: 0.12 },
  { src: "/AboutPage/PeopleHylen/2.png", top: "38%", left: "0%", start: 0.2 },
  { src: "/AboutPage/PeopleHylen/4.png", top: "62%", left: "20%", start: 0.32 },
  { src: "/AboutPage/PeopleHylen/3.png", top: "61%", left: "90%", start: 0.42 },
] as const;

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function PeopleHylen() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const words = useMemo(() => PEOPLE_HYLEN_TEXT.split(" "), []);
  const wordStartLetterIndex = useMemo(() => {
    const lengths = words.map((word) => Array.from(word).length);
    const starts: number[] = [];
    let acc = 0;
    for (const len of lengths) {
      starts.push(acc);
      acc += len;
    }
    return starts;
  }, [words]);
  const clampedProgress = useMemo(
    () => Math.min(Math.max(progress, 0), 1),
    [progress],
  );
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
                const renderLetter = (
                  letter: string,
                  key: string,
                  visibleLetterIndex: number,
                ) => {
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
                        wordStartLetterIndex[wordIndex] + letterIndex,
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

      <div className="people-hylen-photos" aria-hidden="true">
        {PEOPLE_HYLEN_PHOTOS.map((photo) => (
          <img
            key={photo.src}
            className="people-hylen-photo"
            src={photo.src}
            alt=""
            style={
              {
                top: photo.top,
                left: photo.left,
                ["--photo-parallax-y" as never]: (() => {
                  const local = clamp01((progress - photo.start) / (1 - photo.start));
                  const eased = easeOutCubic(local);

                  const riseT = clamp01(eased / 0.75);
                  const hangT = clamp01((eased - 0.75) / 0.25);

                  const riseY = lerp(44, -12, riseT);
                  const hangY = lerp(0, -4, hangT);
                  return `${Math.round(riseY + hangY)}px`;
                })(),
                ["--photo-parallax-scale" as never]: (() => {
                  const local = clamp01((progress - photo.start) / (1 - photo.start));
                  const eased = easeOutCubic(local);
                  return (0.965 + eased * 0.05).toFixed(3);
                })(),
                ["--p" as never]: clampedProgress,
              } as CSSProperties
            }
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}
