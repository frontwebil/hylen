"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import "./style.css";
import { useState } from "react";
import { useLanguage } from "@/Store/useLanguage";

export function FooterLanguagueChanger() {
  const [isOpenLanguagueMenu, setIsOpenLanguagueMenu] = useState(false);

  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="FooterLanguagueChanger"
      onClick={() => setIsOpenLanguagueMenu(!isOpenLanguagueMenu)}
    >
      <div className="FooterLanguagueChanger-top">
        <p style={{ textTransform: "uppercase" }}>{language}</p>
        <IoMdArrowDropdown />
      </div>
      <div
        className={`FooterLanguagueChanger-menu ${isOpenLanguagueMenu && "active"}`}
      >
        <button
          className="FooterLanguagueChanger-button"
          onClick={() => setLanguage("uk")}
        >
          UK
        </button>
        <button
          className="FooterLanguagueChanger-button"
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
