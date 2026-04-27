import Image from "next/image";
import "./style.css";

export function AboutAdvantages() {
  return (
    <section className="about-advantages">
      <div className="container">
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/1.svg"}
              width={55}
              height={55}
              alt="❤️"
            />
          </div>
          <p>Це надійний партнер для тих, хто рухає країну вперед</p>
        </div>
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/2.svg"}
              width={55}
              height={55}
              alt="🛡️"
            />
          </div>
          <p>З 1979 року ми створюємо техніку, яка не підводить</p>
        </div>
        <div className="about-advantage">
          <div className="about-advantage-img">
            <Image
              src={"/AboutPage/AboutAdvantages/3.svg"}
              width={55}
              height={55}
              alt="✏️"
            />
          </div>
          <p>У кожному міліметрі нашої продукції – досвід і характер</p>
        </div>
      </div>
    </section>
  );
}
