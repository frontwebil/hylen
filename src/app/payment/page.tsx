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
      <FooterPageComponentText title={isUk ? "Оплата" : "Payment"}>
        <div>
          <h3 className="footer-page-text-section-title">
            {isUk ? "Готівковий" : "Cash"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Оплата товару в касі заводу."
              : "Payment for goods at the factory cash desk."}
          </p>
        </div>
        <div>
          <h3 className="footer-page-text-section-title">
            {isUk ? "Безготівковий" : "Bank transfer"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Оплата товару згідно рахунку-фактури."
              : "Payment for goods according to the invoice."}
          </p>
        </div>
        <div>
          <h3 className="footer-page-text-section-title">
            {isUk ? "Післяплата" : "Cash on delivery"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Оплата за товар при отриманні у поштовому відділенні або кур'єру у випадку доставки «До дверей»."
              : "Payment for goods upon receipt at the post office or to the courier in case of door-to-door delivery."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Доставка сплачується клієнтом окремо згідно тарифів служби логістики."
              : "Shipping is paid by the customer separately according to the logistics service rates."}
          </p>
        </div>
      </FooterPageComponentText>
      <Footer />
    </>
  );
}
