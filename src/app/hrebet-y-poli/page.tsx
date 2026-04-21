import { Header } from "@/Components/Layout/Header/Header";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";

type ProductCardItem = {
  img: string;
  subTitle: string;
  id: string;
};

type PageData = {
  hero: {
    breadcrums: string;
    title: string;
    subTitle: string;
    text: string;
    cards: ProductCardItem[];
  };
};

export default function page() {
  const pageData: PageData = {
    hero: {
      breadcrums: "хребет у полі",
      title: "Хребет у полі",
      subTitle: "Одноосні причепи",
      text: "Це база, на якій тримається система. Одноосні причепи HYLEN створені витримувати основне навантаження й працювати стабільно у складних умовах. Маневрені, компактні, прості в експлуатації – вони стають надійною ланкою у вашому господарстві.",
      cards: [
        {
          img: "/hrebet-y-poli/1.webp",
          subTitle: "Напівпричіп тракторний одновісний самоскидний НПС",
          id: "id1",
        },
        {
          img: "/hrebet-y-poli/2.webp",
          subTitle: "Напівпричіп тракторний самоскидний",
          id: "id2",
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <ProductHero heroData={pageData.hero} />
    </>
  );
}
