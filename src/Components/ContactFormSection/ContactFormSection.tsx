"use client";

import Link from "next/link";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import axios from "axios";
import { toast } from "react-toastify";
import { useLanguage } from "@/Store/useLanguage";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

export function ContactFormSection() {
  const { language } = useLanguage();

  const t = {
    uk: {
      title: "Контакти",
      description:
        "Ми завжди на зв’язку і готові допомогти вам обрати техніку HYLEN, яка підсилить ваше господарство і зробить роботу ефективнішою.",
      phoneLabel: "Тел.:",
      emailLabel: "Пошта:",
      workTitle: "Графік роботи",
      monFri: "Понеділок – П'ятниця:",
      breakLabel: "Перерва:",
      weekendLabel: "Субота, неділя:",
      weekendValue: "вихідні",
      formTitle: "Зв’яжіться з нами,",
      formDescription:
        "щоб отримати консультацію, замовити продукцію або дізнатись більше про індивідуальні рішення HYLEN. Ми цінуємо кожного клієнта і працюємо для вашого успіху.",
      placeholders: {
        name: "Ім’я*",
        company: "Назва компанії",
        phone: "+38044123 45 67",
        email: "Email*",
        message: "Запит*",
      },
      submit: "ВІДПРАВИТИ",
      submitting: "ВІДПРАВЛЯЄМО...",
      toast: {
        invalidEmail: "Некоректний email",
        sent: "Заявку успішно відправлено!",
        error: "Помилка при відправці",
      },
    },
    en: {
      title: "Contacts",
      description:
        "We are always by your side – helping you choose HYLEN equipment that will strengthen your farm and improve efficiency.",
      phoneLabel: "Tel.:",
      emailLabel: "E-mail:",
      workTitle: "Working Hours",
      monFri: "Monday – Friday:",
      breakLabel: "Break:",
      weekendLabel: "Saturday & Sunday:",
      weekendValue: "Closed",
      formTitle: "Contact us",
      formDescription:
        "For expert advice, product orders, or to explore customised HYLEN solutions. Your success is our mission. Every customer matters.",
      placeholders: {
        name: "Name*",
        company: "Company",
        phone: "+38044123 45 67",
        email: "E-mail*",
        message: "Message*",
      },
      submit: "SEND",
      submitting: "SENDING...",
      toast: {
        invalidEmail: "Invalid e-mail",
        sent: "Successfully sent!",
        error: "Send error",
      },
    },
  } as const;

  const copy = t[language];

  const [data, setData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const width = useWindowWidth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      toast.error(copy.toast.invalidEmail, {
        style: {
          background: "#c0c8c6",
          color: "#1f2a19",
        },
      });
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/create-leed", { data });

      toast.success(copy.toast.sent);

      setData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(copy.toast.error, {
        style: {
          background: "#c0c8c6",
          color: "#1f2a19",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ContactFormSection" id="contacts">
      <div className="container">
        <div className="ContactFormSection-left-text">
          <h2 className="ContactFormSection-left-text-title">{copy.title}</h2>
          <p className="ContactFormSection-left-text-description">
            {copy.description}
          </p>

          <Link
            href={"tel:380997465652"}
            className="ContactFormSection-left-text-info"
          >
            <p>{copy.phoneLabel}</p>
            <p>+38 (099) 746 56 52</p>
          </Link>

          <Link
            href={"mailto:hylen.company@gmail.com"}
            className="ContactFormSection-left-text-info"
          >
            <p>{copy.emailLabel}</p>
            <p>
              <b>hylen.company@gmail.com</b>
            </p>
          </Link>

          <h3 className="ContactFormSection-left-text-work-title">
            {copy.workTitle}
          </h3>

          <div className="ContactFormSection-left-text-work-graph">
            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>{copy.monFri}</b>
              </p>
              <p>8:00-17:00</p>
            </div>

            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>{copy.breakLabel}</b>
              </p>
              <p>12:00-13:00</p>
            </div>

            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>{copy.weekendLabel}</b>
              </p>
              <p>{copy.weekendValue}</p>
            </div>
          </div>
        </div>

        <div className="ContactFormSection-form-wrapper">
          <div className="ContactFormSection-form-line">
            <div className="ContactFormSection-form-white-line"></div>
          </div>

          <div className="ContactFormSection-form">
            <form className="contact-request-form" onSubmit={handleSubmit}>
              {width && width <= 1165 && (
                <div className="header-contact-form-text">
                  <h2>{copy.formTitle}</h2>
                  <p>{copy.formDescription}</p>
                </div>
              )}

              <div className="contact-request-form-grid">
                <div className="contact-request-form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder={copy.placeholders.name}
                    value={data.name}
                    onChange={handleChange}
                    className="contact-request-form-input"
                    required
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="text"
                    name="company"
                    placeholder={copy.placeholders.company}
                    value={data.company}
                    onChange={handleChange}
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={copy.placeholders.phone}
                    value={data.phone}
                    onChange={handleChange}
                    className="contact-request-form-input"
                    required
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder={copy.placeholders.email}
                    value={data.email}
                    onChange={handleChange}
                    className="contact-request-form-input"
                    required
                  />
                </div>

                <div className="contact-request-form-field contact-request-form-field-full">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder={copy.placeholders.message}
                    value={data.message}
                    onChange={handleChange}
                    className="contact-request-form-textarea"
                    required
                  />
                </div>
              </div>

              <div className="contact-request-form-actions">
                <button
                  type="submit"
                  className="contact-request-form-submit"
                  style={{
                    opacity: loading ? 0.6 : 1,
                    pointerEvents: loading ? "none" : "auto",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {loading ? copy.submitting : copy.submit}
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
