"use client";

import "./style.css";
import { useHeaderContactForm } from "@/Store/useHeaderContactForm";
import React, { useState } from "react";
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

export function HeaderContactForm() {
  const { isOpen, close } = useHeaderContactForm();
  const { language } = useLanguage();

  const t = {
    uk: {
      title: "Зв’яжіться з нами,",
      description:
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
      close: "ЗАКРИТИ",
      toast: {
        invalidEmail: "Некоректний email",
        sent: "Заявку успішно відправлено!",
        error: "Помилка при відправці",
      },
    },
    en: {
      title: "Contact us",
      description:
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
      close: "CLOSE",
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      toast.error(copy.toast.invalidEmail, {
        style: {
          background: "#c0c8c6",
          color: "#1f2a19",
        },
      });
      return;
    }

    try {
      setLoading(true);

      await axios.post("/api/create-leed", { data });

      toast.success(copy.toast.sent, {
        style: {
          background: "#c0c8c6",
          color: "#1f2a19",
        },
      });

      setData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });

      close();
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
    <div className={`header-contact-form ${isOpen ? "active" : ""}`}>
      <div className="header-contact-form-wrapper">
        <div className="header-contact-form-text">
          <h2>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>

        <form className="header-contact-form-container" onSubmit={handleSubmit}>
          <div className="header-contact-form-container-grid">
            <div className="header-contact-form-field">
              <input
                type="text"
                name="name"
                placeholder={copy.placeholders.name}
                className="header-contact-form-input"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="text"
                name="company"
                placeholder={copy.placeholders.company}
                className="header-contact-form-input"
                value={data.company}
                onChange={handleChange}
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="tel"
                name="phone"
                placeholder={copy.placeholders.phone}
                className="header-contact-form-input"
                value={data.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="email"
                name="email"
                placeholder={copy.placeholders.email}
                className="header-contact-form-input"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="header-contact-form-field header-contact-form-field-full">
              <textarea
                rows={3}
                name="message"
                placeholder={copy.placeholders.message}
                className="header-contact-form-textarea"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="header-contact-form-container-buttons">
            <button
              type="submit"
              className="header-contact-form-submit"
              style={{
                opacity: loading ? 0.6 : 1,
                pointerEvents: loading ? "none" : "auto",
                transition: "opacity 0.3s ease",
              }}
            >
              {loading ? copy.submitting : copy.submit}
            </button>

            <button
              type="button"
              className="header-contact-form-close"
              onClick={close}
              style={{
                opacity: loading ? 0.6 : 1,
                pointerEvents: loading ? "none" : "auto",
                transition: "opacity 0.3s ease",
              }}
            >
              {copy.close}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
