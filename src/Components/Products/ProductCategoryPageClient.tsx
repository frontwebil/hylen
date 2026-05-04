"use client";

import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import type { ProductsCatalogByLang } from "@/Components/MainPage/Products/Products";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductOtherTypesSlider } from "@/Components/Products/ProductOtherTypesSlider/ProductOtherTypesSlider";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";
import type { ProductPageData } from "@/Types/productData";

type Props = {
  pageData: ProductPageData;
  excludeLink: string;
  /** Ті самі елементи, що блок «продукти» на головній (в обох мовах). */
  carouselByLang?: ProductsCatalogByLang;
};

export function ProductCategoryPageClient({
  pageData,
  excludeLink,
  carouselByLang,
}: Props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <ProductHero heroData={pageData.hero} />
      {pageData.products.map((product, index) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: 120 }}>
          <ProductSections productData={product} showTopLine={index > 0} />
          <TechnicalSpecs specs={product.specs} />
        </div>
      ))}
      <ProductOtherTypesSlider
        excludeLink={excludeLink}
        itemsByLang={carouselByLang}
      />
      <Footer />
    </div>
  );
}
