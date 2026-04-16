"use client";

import { useEffect, useState } from "react";
import "./style.css";

export function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);

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
        onEnded={() => setIsHidden(true)}
          preload="auto"
      >
        <source src="/LoadingScreen/video.webm" type="video/webm" />
      </video>
    </section>
  );
}
