import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";

type ProductCardItem = {
  img: string;
  subTitle: string;
  id: string;
};

type ProductHeroProps = {
  heroData: {
    breadcrums: string;
    title: string;
    subTitle: string;
    text: string;
    cards: ProductCardItem[];
  };
};

export function ProductHero({ heroData }: ProductHeroProps) {
  return (
    <section className="product-hero">
      <div className="container">
        <div className="product-hero-content">
          <div className="product-hero-content-left">
            <div className="product-hero-breadcrums">
              <div className="product-hero-breadcrum">
                <IoMdArrowDropright />
                <p>продукти</p>
              </div>
              <div className="product-hero-breadcrum">
                <IoMdArrowDropright />
                <p>{heroData.breadcrums}</p>
              </div>
            </div>
            <h2 className="product-hero-content-left-title">
              {heroData.title}
            </h2>
            <div className="product-hero-content-left-text">
              <h3 className="product-hero-content-left-text-subTitle">
                {heroData.subTitle}
              </h3>
              <p className="product-hero-content-left-text-text">
                {heroData.text}
              </p>
            </div>
          </div>
          <div className="product-hero-content-cards">
            {heroData.cards.map((productCard, i) => (
              <a
                className="product-hero-content-card"
                key={productCard.id}
                href={`#${productCard.id}`}
                aria-label={`Перейти до опису: ${productCard.subTitle}`}
              >
                <Image
                  src={productCard.img}
                  alt=""
                  width={1000}
                  height={1000}
                />
                <div
                  className={`product-hero-content-card-underImg ${heroData.cards.length - 1 == i && "product-hero-content-card-underImg-border-right"} `}
                >
                  <p className="product-hero-content-card-underImg-subTitle">
                    {productCard.subTitle}
                  </p>
                  <div className="product-hero-content-card-underImg-button">
                    <Image
                      src={"/Header/arrow-white.svg"}
                      width={22}
                      height={22}
                      alt="=>"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
