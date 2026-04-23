"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import "./style.css";

const cards = [
  {
    title: "Заготівельна дільниця",
    img: "/AboutPage/ProductionPower/1.png",
    icon: "/icons/hexagon-left.svg",
    text: "Саме тут все починається. Металеві листи й труби потрапляють сюди першими – їх ріжуть, готують і монтують надбудови. У просторому цеху одночасно працюють 6–10 одиниць техніки: монтаж йде паралельно або послідовно, залежно від задач. Це забезпечує ефективність і швидкість виробництва.",
  },
  {
    title: "Зварювальна дільниця",
    img: "/AboutPage/ProductionPower/2.png",
    icon: "/icons/hexagon-right.svg",
    text: "Серце нашого виробництва. Сюди надходять деталі із заготівельної та механічної дільниць. Тут усе зварюється, збирається, тестується. Саме тут техніка набуває цілісної форми. Тут також проходить фінальна збірка причепів HYLEN – із гарантією міцності кожного шва.",
  },
  {
    title: "Механічна дільниця",
    img: "/AboutPage/ProductionPower/3.png",
    icon: "/icons/hexagon-top.svg",
    text: "Ця дільниця виготовляє деталі, які «оживляють» техніку. Труби, круги, заготовки – усе обробляється точно, згідно з технічними вимогами. Ці деталі потім передаються на зварювання, щоб стати частиною єдиної конструкції.",
  },
  {
    title: "Інструментальна  дільниця",
    img: "/AboutPage/ProductionPower/4.png",
    icon: "/icons/hexagon-empty.svg",
    text: "Тут народжується основа виробництва: прес-форми, штампи, ролики для трубогинів. Ця дільниця забезпечує нас необхідним інструментом, аби кожна операція на інших етапах відбувалася точно й стабільно.",
  },
  {
    title: "Фарбувальна дільниця ",
    img: "/AboutPage/ProductionPower/5.png",
    icon: "/icons/hexagon-full.svg",
    text: "Відповідає за захисне покриття та естетику. Тут метал проходить очищення, ґрунтування й фарбування, щоб у підсумку отримати міцність і стійкість до корозії. Це гарантія, що техніка витримає найскладніші аграрні умови.",
  },
  {
    title: "Ливарна дільниця",
    img: "/AboutPage/ProductionPower/6.png",
    icon: "/icons/hexagon-right-top.svg",
    text: "Спеціалізується на виготовленні деталей із термопластів. Невеликі за розміром елементи забезпечують високу надійність готових виробів.",
  },
  {
    title: "Деревообробна дільниця",
    img: "/AboutPage/ProductionPower/7.png",
    icon: "/icons/hexagon-full.svg",
    text: "Унікальний простір, де народжуються вироби з характером. Сучасний фрезерний верстат дозволяє працювати у 2D та 3D. Тут технічність зустрічається з креативністю, розширюючи можливості виробництва.",
  },
];

export function ProductionPower() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const sticky = stickyRef.current;
    const cards = cardsRef.current;
    if (!sticky || !cards) return;

    const update = () => {
      const overflow = cards.scrollWidth - sticky.clientWidth;
      setMaxTranslateX(Math.max(0, overflow));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(sticky);
    ro.observe(cards);
    return () => ro.disconnect();
  }, []);

  const x = useTransform(scrollYProgress, (p) => -p * maxTranslateX);

  const titleLeadColor = useTransform(
    scrollYProgress,
    [0, 0.02, 1],
    ["#443c3b", "#ffffff", "#ffffff"],
  );

  return (
    <section ref={sectionRef} className="production-power">
      <div ref={stickyRef} className="production-power-sticky">
        <div className="production-power-title">
          <h2>
            Виробничі <br /> потужності HYLEN
          </h2>
          <motion.p style={{ color: titleLeadColor }}>
            Ми не залежимо від сторонніх підрядників. У нас є все, щоб
            виготовити техніку від «нуля» до готового результату. Кожен етап –
            під нашим контролем. І це гарантує якість, терміни та гнучкість
            виробництва.
          </motion.p>
        </div>

        <motion.div ref={cardsRef} style={{ x }} className="production-power-cards">
          {cards.map((card, index) => (
            <div className="production-power-card" key={index}>
              <div className="production-power-card-img">
                <Image
                  src={card.img}
                  width={900}
                  height={650}
                  alt={card.title}
                />
              </div>

              <div className="production-power-card-row">
                <Image src={card.icon} width={30} height={30} alt="hex" />

                <h3 className="production-power-card-row-title">
                  {card.title}
                </h3>
              </div>

              <p className="production-power-card-text">{card.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
