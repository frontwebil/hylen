"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { FooterLanguagueChanger } from "./FooterLanguagueChanger/FooterLanguagueChanger";
import { useLanguage } from "@/Store/useLanguage";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function Footer() {
  const width = useWindowWidth();
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = useMemo(() => searchParams?.get("q") ?? "", [searchParams]);
  const [searchValue, setSearchValue] = useState(initialQ);

  const t = {
    uk: {
      searchTitle: "Пошук по сайту:",
      searchPlaceholder: "я шукаю...",
      searchButton: "ЗНАЙТИ",
      serviceTitleWide: "Контакти відділу \n сервісного обслуговування:",
      serviceTitleNarrow: "Відділ сервісного обслуговування:",
      companyWide: "Інформація про компанію",
      companyNarrow: "Компанія",
      nav: {
        products: "Продукти",
        advantages: "Пeреваги HYLEN",
        bureau: "Конструкторське бюро",
        about: "Про HYLEN",
        contacts: "Контакти",
        aboutBrand: "Про Бренд",
      },
      helpTitle: "Допомога",
      help: {
        payment: "Оплата",
        delivery: "Доставка",
        service: "Сервісне обслуговування",
        returns: "Повернення та обмін",
      },
      under: {
        rights: "©2025 Всі права захищені",
        offer: "Публічна оферта",
        privacy: "Політика конфіденційності",
        cookies: "Політика використання cookies",
      },
    },
    en: {
      searchTitle: "Site search:",
      searchPlaceholder: "search...",
      searchButton: "SEARCH",
      serviceTitleWide: "Service department \n contacts:",
      serviceTitleNarrow: "Service department:",
      companyWide: "Company information",
      companyNarrow: "Company",
      nav: {
        products: "Products",
        advantages: "HYLEN advantages",
        bureau: "Design bureau",
        about: "About HYLEN",
        contacts: "Contacts",
        aboutBrand: "About",
      },
      helpTitle: "Help",
      help: {
        payment: "Payment",
        delivery: "Delivery",
        service: "Service and Maintenance",
        returns: "Returns and Exchanges",
      },
      under: {
        rights: "©2025 All rights reserved",
        offer: "Public Offer",
        privacy: "Privacy policy",
        cookies: "Cookie policy",
      },
    },
  } as const;

  const copy = t[language];

  const runSearch = () => {
    const q = searchValue.trim();
    router.push(q ? `/search-resaults?q=${encodeURIComponent(q)}` : "/search-resaults");
  };

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
              <p className="footer-search-title">{copy.searchTitle}</p>
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
                    placeholder={copy.searchPlaceholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") runSearch();
                    }}
                  />
                </div>
                <div
                  className="footer-search-button"
                  role="button"
                  tabIndex={0}
                  onClick={runSearch}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") runSearch();
                  }}
                >
                  {copy.searchButton}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="footer-content">
          <div className="footer-row bottom">
            <div className="footer-column-content">
              {width && width > 920 ? (
                <h3 className="footer-column-content-title">
                  {copy.serviceTitleWide.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx === 0 && <br />}
                    </span>
                  ))}
                </h3>
              ) : (
                <h3 className="footer-column-content-title">
                  {copy.serviceTitleNarrow}
                </h3>
              )}
              {width && width > 640 ? (
                <div className="footer-column-content-contacts">
                  <Link href={"mailto:hylen.company@gmail.com"}>
                    hylen.company@gmail.com 
                  </Link>
                  <Link href={"tel:0998409875"}>+38 099 840 98 75</Link>
                </div>
              ) : (
                <div className="footer-column-content-contacts">
                  <Link href={"mailto:hylen.company@gmail.com"}>
                    hylen.company@gmail.com 
                  </Link>
                  <Link href={"tel:0998409875"}>+38 099 840 98 75</Link>
                  <FooterLanguagueChanger />
                </div>
              )}
            </div>
            {width && width <= 920 && (
              <div className="footer-search-container">
                <p className="footer-search-title">{copy.searchTitle}</p>
                <div className="footer-search-form">
                  <div className="footer-search">
                    <input
                      type="text"
                      id="search-footer-input"
                      className="footer-search-input"
                      placeholder={copy.searchPlaceholder}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") runSearch();
                      }}
                    />
                  </div>
                  <div
                    className="footer-search-button"
                    role="button"
                    tabIndex={0}
                    onClick={runSearch}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") runSearch();
                    }}
                  >
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
                  {copy.companyWide}
                </h3>
              ) : (
                <h3 className="footer-column-content-title">{copy.companyNarrow}</h3>
              )}
              {width && width > 920 ? (
                <div className="footer-column-content-nav">
                  <Link href={"/products"}>{copy.nav.products}</Link>
                  <Link href={"/#advantages"}>{copy.nav.advantages}</Link>
                  <Link href={"/#byro"}>{copy.nav.bureau}</Link>
                  <Link href={"/about"}>{copy.nav.about}</Link>
                  <Link href={"/contact#contacts"}>{copy.nav.contacts}</Link>
                </div>
              ) : (
                <div className="footer-column-content-nav">
                  <Link href={"/about"}>{copy.nav.aboutBrand}</Link>
                  <Link href={"/products"}>{copy.nav.products}</Link>
                  <Link href={"/contact#contacts"}>{copy.nav.contacts}</Link>
                </div>
              )}
            </div>
            <div className="footer-column-content">
              <h3 className="footer-column-content-title">{copy.helpTitle}</h3>
              <div className="footer-column-content-nav">
                <Link href={"/"}>{copy.help.payment}</Link>
                <Link href={"/"}>{copy.help.delivery}</Link>
                <Link href={"/"}>{copy.help.service}</Link>
                <Link href={"/"}>{copy.help.returns}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-under">
          {width && width > 920 ? (
            <>
              <p>{copy.under.rights}</p>
              <Link href={"/"}>{copy.under.offer}</Link>
              <Link href={"/"}>{copy.under.privacy}</Link>
              <Link href={"/"}>{copy.under.cookies}</Link>
            </>
          ) : (
            <>
              <div className="footer-under-column-left">
                {width && width > 640 && <FooterLanguagueChanger />}
                <p>{copy.under.rights}</p>
              </div>
              <div className="footer-under-column">
                <Link href={"/"}>{copy.under.offer}</Link>
                <Link href={"/"}>{copy.under.privacy}</Link>
                <Link href={"/"}>{copy.under.cookies}</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
