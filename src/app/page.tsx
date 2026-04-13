import { Hero } from "@/Components/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Products } from "@/Components/Products/Products";
import { UnderHeroLines } from "@/Components/Lines/UnderHeroLines/UnderHeroLines";
import { UnderProductsLines } from "@/Components/Lines/UnderProductsLines/UnderProductsLines";

export default function Home() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <Header />
      <Hero />
      <UnderHeroLines />
      <Products />
      <UnderProductsLines />
    </>
  );
}
