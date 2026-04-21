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
        <div className="technical-specs-table-wrap" aria-label="Технічні характеристики">
          <table className="technical-specs-table">
            <thead>
              <tr>
                <th scope="col" className="col-label">
                  Модель
                </th>
                {specs.models.map((model) => (
                  <th key={model} scope="col">
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="row-label">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
