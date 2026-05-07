"use client";

import { FooterPageComponentText } from "@/Components/FooterPageComponent/FooterPageComponentText";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { useLanguage } from "@/Store/useLanguage";

export default function page() {
  const { language } = useLanguage();
  const isUk = language === "uk";

  return (
    <>
      <Header />
      <FooterPageComponentText
        title={isUk ? "Сервісне обслуговування" : "Service and Maintenance"}
      >
        <p className="footer-page-text-paragraph">
          {isUk
            ? "Ми виконуємо сервісне обслуговування всіх товарів, які виготовляємо. Ви можете бути впевненими в тому, що придбана продукція завжди буде працювати стабільно та максимально ефективно."
            : "We provide maintenance service for all products we manufacture. You can be sure that purchased products will always operate stably and as efficiently as possible."}
        </p>
        <p className="footer-page-text-paragraph">
          {isUk
            ? "З питань обслуговування ви можете звертатися у відповідний відділ. Ми будемо раді вам допомогти!"
            : "For service-related questions, you can contact the relevant department. We will be happy to help you!"}
        </p>
      </FooterPageComponentText>
      <Footer />
    </>
  );
}
