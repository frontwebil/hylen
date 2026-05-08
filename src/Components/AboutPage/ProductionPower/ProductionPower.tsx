"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import "./style.css";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { useLanguage } from "@/Store/useLanguage";

const COPY = {
  uk: {
    title: (
      <>
        Виробничі <br /> потужності HYLEN
      </>
    ),
    lead: "Ми не залежимо від сторонніх підрядників. У нас є все, щоб виготовити техніку від «нуля» до готового результату. Кожен етап – під нашим контролем. І це гарантія, якість, терміни та гнучкість виробництва.",
    cards: [
      {
        title: "Заготівельна дільниця",
        img: "/AboutPage/ProductionPower/1.png",
        icon: "/icons/hexagon-left.svg",
        text: "Саме тут все починається. Металеві листи й труби потрапляють сюди першими — їх ріжуть, готують і монтують надбудови. У просторому цеху одночасно працюють 6–10 одиниць техніки. Монтаж йде паралельно або послідовно, залежно від задач. Це забезпечує ефективність і швидкість виробництва.",
      },
      {
        title: "Зварювальна дільниця",
        img: "/AboutPage/ProductionPower/2.png",
        icon: "/icons/hexagon-left.svg",
        text: "Серце нашого виробництва. Сюди надходять деталі із заготівельної та механічної дільниць. Тут усе зварюється, збирається, тестується. Саме тут техніка набуває цілісної форми. Тут також проходить фінальна збірка причепів HYLEN – із гарантією міцності кожного шва.",
      },
      {
        title: "Механічна дільниця",
        img: "/AboutPage/ProductionPower/3.png",
        icon: "/icons/hexagon-left.svg",
        text: "Ця дільниця виготовляє деталі, які «оживляють» техніку. Труби, круги, заготовки – усе обробляється точно, згідно з технічними вимогами. Ці деталі потім передаються на зварювання, щоб стати частиною єдиної конструкції.",
      },
      {
        title: "Інструментальна  дільниця",
        img: "/AboutPage/ProductionPower/4.png",
        icon: "/icons/hexagon-left.svg",
        text: "Тут народжується основа виробництва: прес-форми, штампи, ролики для трубогинів. Ця дільниця забезпечує нас необхідним інструментом, аби кожна операція на інших етапах відбувалася точно й стабільно.",
      },
      {
        title: "Фарбувальна дільниця ",
        img: "/AboutPage/ProductionPower/5.png",
        icon: "/icons/hexagon-left.svg",
        text: "Відповідає за захисне покриття та естетику. Тут метал проходить очищення, ґрунтування й фарбування, щоб у підсумку отримати міцність і стійкість до корозії. Це гарантія, що техніка витримає найскладніші аграрні умови.",
      },
      {
        title: "Ливарна дільниця",
        img: "/AboutPage/ProductionPower/6.png",
        icon: "/icons/hexagon-left.svg",
        text: "Спеціалізується на виготовленні деталей із термопластів. Невеликі за розміром елементи забезпечують високу надійність готових виробів.",
      },
      {
        title: "Деревообробна дільниця",
        img: "/AboutPage/ProductionPower/7.png",
        icon: "/icons/hexagon-left.svg",
        text: "Унікальний простір, де народжуються вироби з характером. Дільниця оснащена сучасним обладнанням для повного циклу роботи з деревиною. Тут технічність поєднується з креативністю, відкриваючи широкі можливості для реалізації найрізноманітніших задумів.",
      },
    ],
  },
  en: {
    title: (
      <>
        HYLEN <br /> production capacity
      </>
    ),
    lead: "We don’t depend on third parties. With everything needed in-house, we manufacture equipment from raw materials to the finished product. Every stage is under our control, guaranteeing quality, on-time delivery, and production flexibility.",
    cards: [
      {
        title: "Fabrication Prep Area",
        img: "/AboutPage/ProductionPower/1.png",
        icon: "/icons/hexagon-left.svg",
        text: "This is where real work starts. Steel plates and pipes come here first. They are cut, processed, and assembled into superstructures. Our spacious workshop allows 6-10 units to run at the same time: whether performed in parallel or step by step, our assembly process adapts to the task — delivering both speed and efficiency.",
      },
      {
        title: "Welding Department",
        img: "/AboutPage/ProductionPower/2.png",
        icon: "/icons/hexagon-right.svg",
        text: "This is the core of our production process. Parts arrive here from the blank and machining sections. Here, every component is welded, assembled, and thoroughly tested for reliability. This is also where the final assembly takes place - with a guarantee of strength in every weld.",
      },
      {
        title: "Mechanical Department",
        img: "/AboutPage/ProductionPower/3.png",
        icon: "/icons/hexagon-top.svg",
        text: "Here, we manufacture the components that bring every piece of equipment to life. Pipes, rounds, and blanks – everything is processed with absolute precision – always in full compliance with technical specifications. From here, the parts move to welding to become part of solid, reliable structure.",
      },
      {
        title: "Tooling Department",
        img: "/AboutPage/ProductionPower/4.png",
        icon: "/icons/hexagon-empty.svg",
        text: "This is where the foundation of production is laid: moulds, dies, and rollers for pipe benders. This section supplies the essential tools that guarantee accuracy and consistency across every stage of production.",
      },
      {
        title: "Painting Department",
        img: "/AboutPage/ProductionPower/5.png",
        icon: "/icons/hexagon-full.svg",
        text: "Responsible for both protective coating and aesthetics, this department ensures every metal part is cleaned, primed, and painted to achieve strength and corrosion resistance. It’s the guarantee that our machinery can withstand the toughest conditions.",
      },
      {
        title: "Casting Department",
        img: "/AboutPage/ProductionPower/6.png",
        icon: "/icons/hexagon-right-top.svg",
        text: "Specializes in the production of polymer components. Small-sized elements ensure high reliability of the finished products.",
      },
      {
        title: "Woodworking Department",
        img: "/AboutPage/ProductionPower/7.png",
        icon: "/icons/hexagon-full.svg",
        text: "A unique space where character-filled products are born. The department is equipped with modern machinery for a full cycle of wood processing. Here, technical precision meets creativity, opening up broad possibilities for bringing even the most ambitious ideas to life.",
      },
    ],
  },
} as const;

export function ProductionPower() {
  const width = useWindowWidth();
  const { language } = useLanguage();
  const copy = COPY[language];
  const cards = copy.cards;

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
    <>
      {" "}
      {width && width <= 760 && (
        <div className="production-power-title">
          <h2>{copy.title}</h2>
          <motion.p style={{ color: titleLeadColor }}>{copy.lead}</motion.p>
        </div>
      )}
      <section ref={sectionRef} className="production-power">
        <div ref={stickyRef} className="production-power-sticky">
          {width && width > 760 && (
            <div className="production-power-title">
              <h2>{copy.title}</h2>
              <motion.p style={{ color: titleLeadColor }}>{copy.lead}</motion.p>
            </div>
          )}

          <motion.div
            ref={cardsRef}
            style={{ x }}
            className="production-power-cards"
          >
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
    </>
  );
}
