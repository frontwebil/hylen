import "./style.css";

export function UnderProductLine() {
  return (
    <section className="under-product-lines">
      <div className="under-product-top-line">
        <div className="container">
          <div className="under-product-top-left-line"></div>
          <div className="under-product-top-right-line"></div>
        </div>
      </div>
      <div className="under-product-bottom-line">
        <div className="container">
          <div className="under-product-bottom-left-line"></div>
          <div className="under-product-bottom-right-line">
            <div className="under-product-bottom-right-line-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
