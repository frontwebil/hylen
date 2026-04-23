import "./style.css";

export function SymetricLine() {
  return (
    <>
      <div className="symetric-line-top">
        <div className="container">
          <div className="symetric-line-top-left"></div>
          <div className="symetric-line-top-right"></div>
        </div>
      </div>
      <div className="symetric-line-bottom">
        <div className="container">
          <div className="symetric-line-bottom-center"></div>
        </div>
      </div>
    </>
  );
}
