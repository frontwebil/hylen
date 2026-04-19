"use client";

import Link from "next/link";
import "./style.css";
import { useEffect } from "react";

export function ContactFormSection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // якщо треба миттєво — прибери behavior
    });
  }, []);
  return (
    <section className="ContactFormSection" id="contacts">
      <div className="container">
        <div className="ContactFormSection-left-text">
          <h2 className="ContactFormSection-left-text-title">Контакти</h2>
          <p className="ContactFormSection-left-text-description">
            Ми завжди на зв’язку і готові допомогти вам обрати техніку HYLEN,
            яка підсилить ваше господарство і зробить роботу ефективнішою.
          </p>

          <Link
            href={"tel:380998409875"}
            className="ContactFormSection-left-text-info"
          >
            <p>Тел:</p>
            <p>+38 (099) 840-98-75</p>
          </Link>

          <Link
            href={"mailto:hylen.company@gmail.com"}
            className="ContactFormSection-left-text-info"
          >
            <p>Пошта:</p>
            <p>
              <b>hylen.company@gmail.com</b>
            </p>
          </Link>

          <h3 className="ContactFormSection-left-text-work-title">
            Графік роботи:
          </h3>
          <div className="ContactFormSection-left-text-work-graph">
            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>Понеділок – П`ятниця:</b>
              </p>
              <p>8:00-17:00 </p>
            </div>
            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>Перерва:</b>
              </p>
              <p>12:00-13:00 </p>
            </div>
            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>Вихідні:</b>
              </p>
              <p>Субота, неділя</p>
            </div>
          </div>
        </div>
        <div className="ContactFormSection-form-wrapper">
          <div className="ContactFormSection-form-line">
            <div className="ContactFormSection-form-white-line"></div>
          </div>
          <div className="ContactFormSection-form">
            <form className="contact-request-form">
              <h2 className="text-center">Зв’язатись з нами</h2>
              <div className="contact-request-form-grid">
                <div className="contact-request-form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ім’я*"
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="text"
                    name="company"
                    placeholder="Назва компанії"
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+38044123 45 67"
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field contact-request-form-field-full">
                  <textarea
                    rows={2}
                    name="message"
                    placeholder="Запит*"
                    className="contact-request-form-textarea"
                  ></textarea>
                </div>
              </div>

              <div className="contact-request-form-actions">
                <button type="submit" className="contact-request-form-submit">
                  ВІДПРАВИТИ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ContactFormSection-underlines">
        <div className="ContactFormSection-underlines-higher">
          <div className="container">
            <div className="ContactFormSection-underlines-higher-line"></div>
          </div>
        </div>
        <div className="ContactFormSection-underlines-top">
          <div className="container">
            <div className="ContactFormSection-underlines-top-left"></div>
            <div className="ContactFormSection-underlines-top-middle"></div>
            <div className="ContactFormSection-underlines-top-right"></div>
          </div>
        </div>
        <div className="ContactFormSection-underlines-under">
          <div className="container">
            <div className="ContactFormSection-underlines-under-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
