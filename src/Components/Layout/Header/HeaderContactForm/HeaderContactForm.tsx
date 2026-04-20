"use client";

import "./style.css";
import { useHeaderContactForm } from "@/Store/useHeaderContactForm";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

export function HeaderContactForm() {
  const { isOpen, close } = useHeaderContactForm();

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
      toast.error("Некоректний email", {
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

      toast.success("Заявку успішно відправлено!", {
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
    <div className={`header-contact-form ${isOpen ? "active" : ""}`}>
      <div className="header-contact-form-wrapper">
        <div className="header-contact-form-text">
          <h2>Зв’яжіться з нами:</h2>
          <p>
            щоб отримати консультацію, замовити продукцію або дізнатись більше
            про індивідуальні рішення HYLEN. Ми цінуємо кожного клієнта і
            працюємо для вашого успіху.
          </p>
        </div>

        <form className="header-contact-form-container" onSubmit={handleSubmit}>
          <div className="header-contact-form-container-grid">
            <div className="header-contact-form-field">
              <input
                type="text"
                name="name"
                placeholder="Ім’я*"
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
                placeholder="Назва компанії"
                className="header-contact-form-input"
                value={data.company}
                onChange={handleChange}
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="tel"
                name="phone"
                placeholder="+38044123 45 67"
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
                placeholder="Email*"
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
                placeholder="Запит*"
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
              {loading ? "ВІДПРАВЛЯЄМО..." : "ВІДПРАВИТИ"}
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
              ЗАКРИТИ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
