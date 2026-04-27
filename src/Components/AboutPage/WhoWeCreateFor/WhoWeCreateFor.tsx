import Image from "next/image";
import "./style.css";

export function WhoWeCreateFor() {
  return (
    <>
      <div className="who-we-create-for-top-lines">
        <div className="container">
          <div className="who-we-create-for-top-line-left"></div>
          <div className="who-we-create-for-top-line-right"></div>
        </div>
      </div>
      <section className="who-we-create-for">
        <div className="container">
          <div className="who-we-create-for-flex">
            <p className="who-we-create-for-flex-text">
              Фермери, механізатори, водії, майстри, логісти, управлінці,
              військові – саме для них ми створюємо HYLEN. <br />
              <br />
              Ми добре розуміємо потреби цих людей, бо самі з цього середовища.
              Знаємо, що головне – це надійність, простота в користуванні і
              впевненість, що техніка не підведе у вирішальний момент.
            </p>
            <div className="who-we-create-for-flex-row">
              <Image
                src={"/AboutPage/WhoWeCreateFor/icon.svg"}
                width={80}
                height={50}
                alt="Hylen"
              />
              <h2>Тому HYLEN – без зайвого. Тільки те, що справді потрібно</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="who-we-create-for-bottom-lines">
        <div className="container">
          <div className="who-we-create-for-bottom-line-left"></div>
          <div className="who-we-create-for-bottom-line-right"></div>
        </div>
      </div>
      <div className="who-we-create-for-underbottom-lines">
        <div className="container">
          <div className="who-we-create-for-underbottom-line-left"></div>
          <div className="who-we-create-for-underbottom-line-right"></div>
        </div>
      </div>
    </>
  );
}
