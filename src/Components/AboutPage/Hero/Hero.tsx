import Image from "next/image";
import "./style.css";

export function Hero() {
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
          <Image
            src={"/AboutPage/Hero/Hero-img.svg"}
            width={10000}
            height={3000}
            className="about-hero-text-img"
            alt="HYLEN"
          />
        </div>
      </div>
    </section>
  );
}
