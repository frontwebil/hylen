"use client";

import Link from "next/link";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

export function ContactFormSection() {
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
      toast.error("Некоректний email", {
        style: {
          background: "#c0c8c6",
          color: "#1f2a19",
        },
      });
      return;
    }

    try {
      await axios.post("/api/create-leed", { data });

      toast.success("Заявку успішно відправлено!");

      setData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Помилка при відправці", {
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
              <p>8:00-17:00</p>
            </div>

            <div className="ContactFormSection-left-text-work-graph-column">
              <p>
                <b>Перерва:</b>
              </p>
              <p>12:00-13:00</p>
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
            <form className="contact-request-form" onSubmit={handleSubmit}>
              {width && width <= 1165 && (
                <div className="header-contact-form-text">
                  <h2>Зв’яжіться з нами:</h2>
                  <p>
                    щоб отримати консультацію, замовити продукцію або дізнатись
                    більше про індивідуальні рішення HYLEN. Ми цінуємо кожного
                    клієнта і працюємо для вашого успіху.
                  </p>
                </div>
              )}

              <div className="contact-request-form-grid">
                <div className="contact-request-form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ім’я*"
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
                    placeholder="Назва компанії"
                    value={data.company}
                    onChange={handleChange}
                    className="contact-request-form-input"
                  />
                </div>

                <div className="contact-request-form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+38044123 45 67"
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
                    placeholder="Email*"
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
                    placeholder="Запит*"
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
                  {loading ? "ВІДПРАВЛЯЄМО..." : "ВІДПРАВИТИ"}
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
