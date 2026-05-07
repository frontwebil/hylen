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
      <FooterPageComponentText title={isUk ? "Доставка" : "Delivery"}>
        <p className="footer-page-text-paragraph">
          {isUk
            ? "Доставка товару виконується «Новою Поштою» згідно з тарифами компанії."
            : "Delivery is carried out by Nova Poshta according to the company's rates."}
        </p>
        <p className="footer-page-text-paragraph">
          {isUk
            ? "Вартість доставки оплачується покупцем окремо від вартості товару."
            : "Shipping cost is paid by the customer separately from the cost of goods."}
        </p>
        <p className="footer-page-text-paragraph">
          {isUk
            ? "Також товар можна забрати самовивозом з території підприємства."
            : "You can also pick up the goods yourself from the enterprise territory."}
        </p>
      </FooterPageComponentText>
      <Footer />
    </>
  );
}
