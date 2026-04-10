"use client";

import { useState } from "react";
import "./style.css";

export function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className={`loading-screen ${isHidden ? "hide" : ""}`}>
      <video
        autoPlay
        muted
        playsInline
        className="loading-screen-video"
        onEnded={() => setIsHidden(true)}
      >
        <source src="/LoadingScreen/video.webm" type="video/webm" />
      </video>
    </section>
  );
}
