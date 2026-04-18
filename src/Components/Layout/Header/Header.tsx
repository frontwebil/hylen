"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/Store/useLanguage";
import { MdArrowForward } from "react-icons/md";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { FooterLanguagueChanger } from "../Footer/FooterLanguagueChanger/FooterLanguagueChanger";
import { IoMdSearch } from "react-icons/io";
import { HeaderContactForm } from "./HeaderContactForm/HeaderContactForm";
import { useHeaderContactForm } from "@/Store/useHeaderContactForm";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLanguagueMenu, setIsOpenLanguagueMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const {
    isOpen: isContactFormOpen,
    open: openContactForm,
    close: closeContactForm,
  } = useHeaderContactForm();
  const width = useWindowWidth();
  const isMenuVisible = isOpenMenu && !isContactFormOpen;

  const handleMenuToggle = () => {
    setIsOpenLanguagueMenu(false);
    if (isContactFormOpen) closeContactForm();
    setIsOpenMenu((prev) => !prev);
  };

  const handleContactFormOpen = () => {
    setIsOpenMenu(false);
    setIsOpenLanguagueMenu(false);
    if (isContactFormOpen) {
      closeContactForm();
      return;
    }
    openContactForm();
  };

  const handleLanguageToggle = () => {
    if (isContactFormOpen) closeContactForm();
    setIsOpenLanguagueMenu((prev) => !prev);
  };

  const handleLanguageSelect = (nextLanguage: "uk" | "en") => {
    setLanguage(nextLanguage);
    setIsOpenMenu(false);
    if (isContactFormOpen) closeContactForm();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <Image
              src={
                width && width > 720
                  ? "/Header/logo.svg"
                  : "/Header/logo-mobile.svg"
              }
              width={110}
              height={18}
              alt="Hylen Logo"
            />
          </div>
          {width && width > 1200 && (
            <div className="header-menu-button" onClick={handleMenuToggle}>
              <div
                className={`header-menu-button-icon ${isMenuVisible ? "open" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`header-menu ${isMenuVisible ? "active" : ""}`}>
                <Link href={"/"} className="header-menu-link">
                  <p>про бренд</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
                <Link href={"/"} className="header-menu-link">
                  <p>Продукти</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
                <Link href={"/"} className="header-menu-link">
                  <p>контакти</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
              </div>
            </div>
          )}

          {width && width > 620 && (
            <>
              <div className="header-search">
                {width && width >= 1340 && (
                  <label htmlFor="search-input">
                    <div className="header-search-icon">
                      <Image
                        src={"/Header/search.svg"}
                        width={24}
                        height={24}
                        alt="Search"
                      />
                    </div>
                  </label>
                )}
                <input
                  type="text"
                  id="search-input"
                  className="header-search-input"
                  placeholder="я шукаю..."
                />
              </div>

              <div className="header-search-button">
                {width && width >= 1340 ? (
                  "Знайти"
                ) : (
                  <Image
                    src={"/Header/search-white.svg"}
                    width={24}
                    height={24}
                    alt="Search"
                  />
                )}
              </div>
            </>
          )}

          <div className="header-tel-us">
            <Link href={"tel:380998409875"}>+38 (099) 840-98-75</Link>
          </div>
          <div className="contact-us" onClick={handleContactFormOpen}>
            <p>зв’язатись з нами</p>
            <Image
              src={"/Header/arrow-white.svg"}
              width={14}
              height={15}
              alt="=>"
            />
          </div>
          <div
            className="header-search-changle-language"
            onClick={handleLanguageToggle}
          >
            <p>{language}</p>
            <Image src={"/Header/icon-lang.svg"} width={8} height={6} alt=">" />
            <div
              className={`header-search-changle-language-menu ${isOpenLanguagueMenu && "active"}`}
            >
              <button className="" onClick={() => handleLanguageSelect("uk")}>
                UK
              </button>
              <button className="" onClick={() => handleLanguageSelect("en")}>
                EN
              </button>
            </div>
          </div>
          {width && width <= 1200 && (
            <div className="header-menu-button" onClick={handleMenuToggle}>
              <div
                className={`header-menu-button-icon ${isMenuVisible ? "open" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`header-menu ${isMenuVisible ? "active" : ""}`}>
                <Link href={"#about"} className="header-menu-link">
                  <p>про бренд</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
                <Link href={"#products"} className="header-menu-link">
                  <p>Продукти</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
                <Link href={"#contacts"} className="header-menu-link last">
                  <p>контакти</p>
                  <MdArrowForward className="header-menu-link-icon" />
                </Link>
                {width && width <= 620 && (
                  <div className="header-search-mobile-wrapper">
                    <div className="header-search">
                      {width && width >= 1340 && (
                        <label htmlFor="search-input">
                          <div className="header-search-icon">
                            <Image
                              src={"/Header/search.svg"}
                              width={24}
                              height={24}
                              alt="Search"
                            />
                          </div>
                        </label>
                      )}
                      <input
                        type="text"
                        id="search-input"
                        className="header-search-input"
                        placeholder="я шукаю..."
                      />
                    </div>

                    <div className="header-search-button">
                      {width && width >= 1340 ? "Знайти" : <IoMdSearch />}
                    </div>
                  </div>
                )}
                <div className="header-menu-mobile-contact">
                  <h3 className="header-menu-mobile-contact-title">
                    Зв’язатись з нами:
                  </h3>
                  <div className="header-menu-mobile-contact-cards">
                    <div
                      className="header-menu-mobile-contact-card"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContactFormOpen();
                      }}
                    >
                      <Image
                        src={"/Header/paper.svg"}
                        width={25}
                        height={25}
                        alt="file"
                      />
                    </div>
                    <Link
                      href={"tel:380998409875"}
                      className="header-menu-mobile-contact-card"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Image
                        src={"/Header/tel.svg"}
                        width={25}
                        height={25}
                        alt="file"
                      />
                    </Link>
                  </div>
                  <div
                    className="header-search-changle-language mobile"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLanguageToggle();
                    }}
                  >
                    <p>{language}</p>
                    <Image
                      src={"/Header/icon-lang.svg"}
                      width={8}
                      height={6}
                      alt=">"
                    />
                    <div
                      className={`header-search-changle-language-menu ${isOpenLanguagueMenu && "active"}`}
                    >
                      <button
                        className=""
                        onClick={() => handleLanguageSelect("uk")}
                      >
                        UK
                      </button>
                      <button
                        className=""
                        onClick={() => handleLanguageSelect("en")}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <HeaderContactForm />
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
}
