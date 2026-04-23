import "./style.css";

export function Repair() {
  return (
    <>
      <section className="repair">
        <div className="repair-title">Ремонти – друге життя вашої техніки</div>
        <div className="repair-content"></div>
      </section>
      <section className="UnderByroLines">
        <div className="UnderByroLines-top">
          <div className="container">
            <span className="UnderByroLines-top-left-line"></span>
            <span className="UnderByroLines-top-right-line"></span>
          </div>
        </div>
        <div className="UnderByroLines-bottom">
          <div className="container">
            <span className="UnderByroLines-bottom-left-line"></span>
            <span className="UnderByroLines-bottom-middle-line"></span>
            <span className="UnderByroLines-bottom-right-line"></span>
          </div>
        </div>
      </section>
    </>
  );
}
