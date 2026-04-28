 "use client";

import Image from "next/image";
import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

export function Byro() {
  const { language } = useLanguage();

  const t = {
    uk: {
      title: "Конструкторське бюро",
      subTitle: (
        <>
          Ваш партнер <br />у розробці техніки
        </>
      ),
      lead:
        "Конструкторське бюро HYLEN – це місце, де народжується техніка. Тут ідеї перетворюються на рішення, які працюють у полі, на фермі чи на дорозі.",
      text: (
        <>
          Сьогодні КБ працює у двох основних напрямах: сільськогосподарська
          техніка та колісна й важка техніка. Від легких причепів і гноєвивізних
          систем до великогабаритних контейнеровозів і паливозаправників. Кожен
          проєкт створюється так, щоб відповідати конкретній потребі.
          <br />
          <br />
          Конструкторське бюро HYLEN – це гнучкість, інженерна сміливість і
          прагнення знаходити відповіді на будь-які задачі.
        </>
      ),
    },
    en: {
      title: "Engineering Bureau",
      subTitle: (
        <>
          Your Partner <br />
          in Machine Development
        </>
      ),
      lead:
        "This is where ideas turn into real solutions – built to perform in the field, on the farm, or on the road.",
      text: (
        <>
          Today, our Design Bureau focuses on two main directions: agricultural
          machinery and wheeled & heavy-duty equipment. From light trailers and
          manure systems to large-scale container carriers and fuel trucks, every
          project is engineered to meet a specific need.
          <br />
          <br />
          HYLEN Design Bureau stands for flexibility, engineering boldness, and
          the drive to find answers to any challenge.
        </>
      ),
    },
  } as const;

  const copy = t[language];

  return (
    <section className="byro" id="byro">
      <div className="container">
        <div className="byro-top">
          <h2>{copy.title}</h2>
          <Image
            src={"/Byro/byro-logo.svg"}
            width={1500}
            height={300}
            alt="Hylen Logo"
          />
          <h3>{copy.subTitle}</h3>
        </div>
        <div className="byro-content">
          <div className="byro-content-img">
            <Image
              src={"/Byro/byro.png"}
              width={2000}
              height={1000}
              alt="byro-photo"
            />
            <div className="byro-globe">
              <Image
                className="byro-globe__image"
                src={"/Byro/bg-globe.svg"}
                width={3000}
                height={2000}
                alt=""
              />
            </div>
          </div>
          <div className="byro-content-text">
            <h2>{copy.lead}</h2>
            <p>{copy.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
