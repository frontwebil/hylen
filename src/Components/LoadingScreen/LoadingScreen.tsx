"use client";

import { useEffect, useState } from "react";
import "./style.css";

export function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsHidden(true);
    }, 3300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (!isHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHidden]);

  return (
    <section className={`loading-screen ${isHidden ? "hide" : ""}`}>
      <video
        autoPlay
        muted
        playsInline
        className="loading-screen-video"
        preload="auto"
      >
        <source src="/LoadingScreen/video.webm" type="video/webm" />
      </video>
    </section>
  );
}
