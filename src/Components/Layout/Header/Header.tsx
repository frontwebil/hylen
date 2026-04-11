import Image from "next/image";
import "./style.css";
import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Image
            src={"/Header/logo.svg"}
            width={110}
            height={18}
            alt="Hylen Logo"
          />
        </div>
        <div className="header-menu-button">
          <div className="header-menu-button-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-search">
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
          <input
            type="text"
            id="search-input"
            className="header-search-input"
          />
        </div>
        <div className="header-search-button">ЗНАЙТИ</div>
        <div className="header-tel-us">
          <Link href={"tel:380997465652"}>+38 (099) 746-56-52</Link>
        </div>
        <div className="contact-us">
          <p>зв’язатись з нами</p>
          <Image
            src={"/Header/arrow-white.svg"}
            width={14}
            height={15}
            alt="=>"
          />
        </div>
        <div className="header-search-changle-language">
          <p>UK</p>
          <Image src={"/Header/icon-lang.svg"} width={8} height={6} alt=">" />
        </div>
      </div>
    </header>
  );
}
