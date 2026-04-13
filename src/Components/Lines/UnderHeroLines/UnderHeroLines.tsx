import "./UnderHeroLines.css";

export function UnderHeroLines() {
  return (
    <section className="under-hero-lines">
      <div className="under-hero-line-edge">
        <div className="container">
          <span className="under-hero-line-edge-left" />
          <span className="under-hero-line-edge-right" />
        </div>
      </div>
      <div className="under-hero-line-middle">
        <div className="container">
          <span className="under-hero-line-middle-left" />
          <span className="under-hero-line-middle-right" />
        </div>
      </div>
      <div className="under-hero-line-edge">
        <div className="container">
          <span className="under-hero-line-edge-left" />
          <span className="under-hero-line-edge-right" />
        </div>
      </div>
    </section>
  );
}
