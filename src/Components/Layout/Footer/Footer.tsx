"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { FooterLanguagueChanger } from "./FooterLanguagueChanger/FooterLanguagueChanger";

export function Footer() {
  const width = useWindowWidth();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Image
              src={"/Footer/logo.svg"}
              width={1000}
              height={300}
              alt="HYLEN"
            />
          </div>
          {width && width > 920 && (
            <div className="footer-search-container">
              <p className="footer-search-title">Пошук по сайту:</p>
              <div className="footer-search-form">
                <div className="footer-search">
                  <label htmlFor="search-footer-input">
                    <div className="header-search-icon">
                      <Image
                        src={"/Header/search.svg"}
                        width={24}
                        height={24}
                        alt="Search"
                      />
                    </div>
                  </label>
                  <input
                    type="text"
                    id="search-footer-input"
                    className="footer-search-input"
                  />
                </div>
                <div className="footer-search-button">ЗНАЙТИ</div>
              </div>
            </div>
          )}
        </div>
        <div className="footer-content">
          <div className="footer-row bottom">
            <div className="footer-column-content">
              {width && width > 920 ? (
                <h3 className="footer-column-content-title">
                  Контакти відділу <br /> сервісного обслуговування:
                </h3>
              ) : (
                <h3 className="footer-column-content-title">
                  Відділ сервісного обслуговування:
                </h3>
              )}
              {width && width > 640 ? (
                <div className="footer-column-content-contacts">
                  <Link href={"mailto:hylen.company@gmail.com"}>
                    hylen.company@gmail.com 
                  </Link>
                  <Link href={"tel:380998409875"}>+38 (099) 840-98-75</Link>
                </div>
              ) : (
                <div className="footer-column-content-contacts">
                  <Link href={"mailto:hylen.company@gmail.com"}>
                    hylen.company@gmail.com 
                  </Link>
                  <Link href={"tel:380998409875"}>+38 (099) 840-98-75</Link>
                  <FooterLanguagueChanger />
                </div>
              )}
            </div>
            {width && width <= 920 && (
              <div className="footer-search-container">
                <p className="footer-search-title">Пошук по сайту:</p>
                <div className="footer-search-form">
                  <div className="footer-search">
                    <input
                      type="text"
                      id="search-footer-input"
                      className="footer-search-input"
                      placeholder="я шукаю..."
                    />
                  </div>
                  <div className="footer-search-button">
                    {" "}
                    <div className="header-search-icon">
                      <Image
                        src={"/Footer/search-white.svg"}
                        width={24}
                        height={24}
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="footer-row">
            <div className="footer-column-content">
              {width && width > 920 ? (
                <h3 className="footer-column-content-title">
                  Інформація про компанію
                </h3>
              ) : (
                <h3 className="footer-column-content-title">Компанія</h3>
              )}
              {width && width > 920 ? (
                <div className="footer-column-content-nav">
                  <Link href={"/#products"}>Продукти</Link>
                  <Link href={"/#advantages"}>Пeреваги Hylen</Link>
                  <Link href={"/#byro"}>Конструкторське бюро</Link>
                  <Link href={"/#about"}>Про HYLEN</Link>
                  <Link href={"/contact#contacts"}>Контакти</Link>
                </div>
              ) : (
                <div className="footer-column-content-nav">
                  <Link href={"/#about"}>Про Бренд</Link>
                  <Link href={"/#products"}>Продукти</Link>
                  <Link href={"/contact#contacts"}>Контакти</Link>
                </div>
              )}
            </div>
            <div className="footer-column-content">
              <h3 className="footer-column-content-title">Допомога</h3>
              <div className="footer-column-content-nav">
                <Link href={"/"}>Оплата</Link>
                <Link href={"/"}>Доставка</Link>
                <Link href={"/"}>Сервісне обслуговування</Link>
                <Link href={"/"}>Повернення та обмін</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-under">
          {width && width > 920 ? (
            <>
              <p>©2025 Всі права захищені</p>
              <Link href={"/"}>Публічна оферта</Link>
              <Link href={"/"}>Політика конфіденційності</Link>
              <Link href={"/"}>Політика використання cookies</Link>
            </>
          ) : (
            <>
              <div className="footer-under-column-left">
                {width && width > 640 && <FooterLanguagueChanger />}
                <p>©2025 Всі права захищені</p>
              </div>
              <div className="footer-under-column">
                <Link href={"/"}>Публічна оферта</Link>
                <Link href={"/"}>Політика конфіденційності</Link>
                <Link href={"/"}>Політика використання cookies</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
