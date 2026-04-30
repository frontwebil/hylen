"use client";

import { useWindowWidth } from "@/Hooks/useWindowWidth";
import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

export function Repair() {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const t = {
    uk: {
      title: "Ремонти – друге життя вашої техніки",
      topLeft:
        "У HYLEN ми віримо, що техніка заслуговує на ще один шанс.Саме тому ми займаємось капітальним ремонтом вантажних автомобілів.",
      topRight: "Кожен ремонт – це не лише заміна деталей, а відновлення ресурсу всієї машини.",
      bottomLeft:
        "Ми проводимо діагностику, ремонтуємо двигуни й коробки передач, обробляємо вузли дробо– та піскоструминними технологіями, фарбуємо й захищаємо від корозії.",
      bottomRight:
        "На фінальному етапі автомобіль проходить тестування, щоб бути готовим до нових завдань. У результаті техніка отримує нове життя.",
    },
    en: {
      title: "Repairs — giving your machinery a second life",
      topLeft:
        "At HYLEN, we believe that machinery deserves a second chance. That’s why we specialize in major overhauls of trailer equipment, restoring them to full working condition.",
      topRight:
        "Every repair goes beyond simply replacing parts — it’s about reviving the entire machine’s potential.",
      bottomLeft:
        "We perform thorough diagnostics, service engines and gearboxes, treat components with shot-blasting and sand-blasting technologies, and apply protective coatings to prevent corrosion.",
      bottomRight:
        "Finally, each truck undergoes rigorous testing to ensure it’s ready for new challenges. The result? Your machinery gets a new lease on life.",
    },
  } as const;

  const copy = t[language];

  return (
    <>
      <section className="repair-lines">
        {" "}
        <div className="repair-lines-bottom">
          <div className="container">
            <span className="repair-lines-bottom-left-line"></span>
            <span className="repair-lines-bottom-middle-line"></span>
          </div>
        </div>
        <div className="repair-lines-top">
          <div className="container">
            <span className="repair-lines-top-left-line"></span>
          </div>
        </div>
      </section>
      <section className="repair">
        <div className="repair-title">{copy.title}</div>
        {width && width <= 1000 && (
          <div className="repair-content-top-text">
            <div className="repair-content-text-card top-left">
              {copy.topLeft}
            </div>
            <div className="repair-content-text-card top-right">
              {copy.topRight}
            </div>
          </div>
        )}
        <div className="repair-content">
          <div className="container">
            {width && width > 1000 && (
              <div className="repair-content-top-text">
                <div className="repair-content-text-card top-left">
                  {copy.topLeft}
                </div>
                <div className="repair-content-text-card top-right">
                  {copy.topRight}
                </div>
              </div>
            )}
            {width && width > 1000 && (
              <div className="repair-content-bottom-text">
                <div className="repair-content-text-card bottom-left">
                  {copy.bottomLeft}
                </div>
                <div className="repair-content-text-card bottom-right">
                  {copy.bottomRight}
                </div>
              </div>
            )}
          </div>
        </div>
        {width && width <= 1000 && (
          <div className="repair-content-bottom-text">
            <div className="repair-content-text-card bottom-left">
              {copy.bottomLeft}
            </div>
            <div className="repair-content-text-card bottom-right">
              {copy.bottomRight}
            </div>
          </div>
        )}
      </section>

      <section className="repair-lines">
        <div className="repair-lines-top">
          <div className="container">
            <span className="repair-lines-top-left-line"></span>
            <span className="repair-lines-top-right-line"></span>
          </div>
        </div>
        <div className="repair-lines-bottom">
          <div className="container">
            <span className="repair-lines-bottom-left-line"></span>
            <span className="repair-lines-bottom-middle-line"></span>
            <span className="repair-lines-bottom-right-line"></span>
          </div>
        </div>
      </section>
    </>
  );
}
