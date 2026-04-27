import "./style.css";

export function UnderProductLine() {
  return (
    <section className="under-product-lines">
      <div className="under-product-top-line">
        <div className="under-product-top-left-line"></div>
        <div className="under-product-top-right-line"></div>
      </div>
      <div className="under-product-bottom-line">
        <div className="under-product-top-left-line"></div>
        <div className="under-product-top-right-line">
          <div className="under-product-top-right-line-right"></div>
          <div className="under-product-top-right-line-left"></div>
        </div>
      </div>
    </section>
  );
}
