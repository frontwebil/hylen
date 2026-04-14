import Image from "next/image";
import Link from "next/link";
import "./style.css";

export function Footer() {
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
        </div>
        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-column-content">
              <h3 className="footer-column-content-title">
                Контакти відділу <br /> сервісного обслуговування:
              </h3>
              <div className="footer-column-content-contacts">
                <Link href={"mailto:hylen.company@gmail.com"}>
                  hylen.company@gmail.com 
                </Link>
                <Link href={"tel:380997465652"}>+38 (099) 746-56-52</Link>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-column-content">
              <h3 className="footer-column-content-title">
                Інформація про компанію
              </h3>
              <div className="footer-column-content-nav">
                <Link href={"/"}>Продукти</Link>
                <Link href={"/"}>Пeреваги Hylen</Link>
                <Link href={"/"}>Конструкторське бюро</Link>
                <Link href={"/"}>Про HYLEN</Link>
                <Link href={"/"}>контакти</Link>
              </div>
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
          <p>©2025   Всі права захищені</p>
          <Link href={"/"}>Публічна оферта</Link>
          <Link href={"/"}>Політика конфіденційності</Link>
          <Link href={"/"}>Політика використання Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
