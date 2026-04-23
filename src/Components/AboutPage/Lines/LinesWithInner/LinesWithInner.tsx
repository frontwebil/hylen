import "./style.css";

export function LinesWithInner() {
  return (
    <section className="lines-with-inner">
      <div className="lines-with-inner-top-lines">
        <div className="container">
          <div className="lines-with-inner-top-left-line"></div>
          <div className="lines-with-inner-top-right-line"></div>
        </div>
      </div>
      <div className="lines-with-inner-bottom-lines">
        <div className="container">
          <div className="lines-with-inner-bottom-left-line"></div>
          <div className="lines-with-inner-bottom-right-line">
            <div className="lines-with-inner-bottom-right-inner-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
