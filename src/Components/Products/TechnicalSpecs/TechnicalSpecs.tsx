import "./style.css";

type ProductSpecRow = {
  label: string;
  values: string[];
};

type ProductSpecs = {
  models: string[];
  rows: ProductSpecRow[];
};

export function TechnicalSpecs({ specs }: { specs: ProductSpecs }) {
  return (
    <section className="technical-specs">
      <div className="container">
        <h2>Технічні характеристики</h2>
        <div className="technical-specs-table">
          <div className="table-left">
            <div className="table-top-line">Модель</div>

            {specs.rows.map((row, i) => (
              <div key={i} className="table-left-line">{row.label}</div>
            ))}
          </div>

          <div className="table-right">
            <div className="scroll-x">
              <div className="row table-top-line">
                {specs.models.map((model, i) => (
                  <div key={i}>{model}</div>
                ))}
              </div>

              {specs.rows.map((row, i) => (
                <div className="row" key={i}>
                  {row.values.map((value, i) => (
                    <div key={i}>{value}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
