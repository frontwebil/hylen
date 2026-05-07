"use client";

import Link from "next/link";
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
        title={isUk ? "Повернення та обмін" : "Returns and Exchange"}
      >
        <p className="footer-page-text-paragraph">
          {isUk
            ? "ГК «Брацлав» здійснює повернення і обмін товарів належної якості згідно Закону «Про захист прав споживачів»."
            : "Bratslav Group provides return and exchange of goods of proper quality according to the Law of Ukraine On Consumer Rights Protection."}{" "}
          <Link
            className="footer-page-text-link"
            href="http://zakon2.rada.gov.ua/laws/show/1023-12"
            target="_blank"
          >
            {isUk ? "Посилання на закон" : "Law link"}
          </Link>
          .
        </p>

        <div>
          <h3 className="footer-page-text-section-title">
            {isUk ? "Строки повернення і обміну" : "Return and exchange period"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Повернення та обмін товарів можливий протягом 14 днів після отримання товару покупцем."
              : "Return and exchange of goods are possible within 14 days after the customer receives the goods."}
          </p>
        </div>

        <div>
          <h3 className="footer-page-text-section-title">
            {isUk ? "Зворотня доставка товарів" : "Return shipping"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Здійснюється за домовленістю."
              : "Handled by prior agreement."}
          </p>
        </div>

        <div>
          <h3 className="footer-page-text-section-title">
            {isUk
              ? "Умови повернення для товарів належної якості"
              : "Return conditions for goods of proper quality"}
          </h3>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Закон про захист прав споживачів дає нашим покупцям право на повернення товару належної якості протягом чотирнадцяти днів у тому випадку, якщо збережено товарний вигляд виробу і упаковки."
              : "The consumer protection law gives our customers the right to return goods of proper quality within fourteen days if the product and packaging appearance is preserved."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "До здійснення повернення необхідно звернутися в той роздрібний магазин, де була зроблена покупка, або зв'язатися з менеджерами, відповідальними за вашим замовленням, якщо була оформлена доставка поштою або кур'єром."
              : "To initiate a return, you should contact the retail store where the purchase was made, or reach out to the managers responsible for your order if delivery by post or courier was arranged."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Контакти менеджера ви знайдете в особистому кабінеті. Претензії щодо комплектності товару приймаються тільки у разі відсутності ознак його експлуатації, а також за збереження його товарного вигляду."
              : "You can find your manager's contacts in your personal account. Claims regarding product completeness are accepted only if there are no signs of use and the original commercial appearance is preserved."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "У разі прийняття позитивного рішення про наявність браку, наш інтернет-магазин може обміняти бракований товар на новий. Якщо брак полягав у відсутності елементів, яких не вистачає, то наш інтернет-магазин надасть необхідні елементи."
              : "If a defect is confirmed, our online store may replace the defective product with a new one. If the defect concerns missing components, our online store will provide the necessary elements."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "На оформлення заяви про брак та прийняття рішення за законодавством може піти до 21 дня, проте ми зробимо все необхідне для його прискорення."
              : "Processing a defect claim and making a decision may take up to 21 days under the law, but we will do everything necessary to speed it up."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Також просимо звернути увагу на товари, що не підлягають обміну та поверненню, якщо вони належної якості."
              : "Please also note that some goods are not subject to exchange and return if they are of proper quality."}
          </p>
          <p className="footer-page-text-paragraph">
            {isUk
              ? "Повний перелік цих товарів ви знайдете в Законі України «Про захист прав споживачів»."
              : "The full list of such goods is available in the Law of Ukraine On Consumer Rights Protection."}
          </p>
        </div>

        <p className="footer-page-text-paragraph">
          {isUk
            ? "Відповідно закону «Про захист прав споживачів», компанія може відмовити споживачеві в обміні та поверненні товарів належної якості, якщо вони відносяться до категорій, зазначених у чинному «Переліку непродовольчих товарів належної якості, що не підлягають поверненню та обміну»."
            : "According to the Law On Consumer Rights Protection, the company may refuse exchange and return of proper-quality goods if they belong to categories listed in the current List of non-food goods of proper quality that are not subject to return and exchange."}{" "}
          <Link
            className="footer-page-text-link"
            href="http://zakon2.rada.gov.ua/laws/show/172-94-%D0%BF"
            target="_blank"
          >
            {isUk ? "Перелік товарів" : "Goods list"}
          </Link>
          .
        </p>
      </FooterPageComponentText>
      <Footer />
    </>
  );
}
