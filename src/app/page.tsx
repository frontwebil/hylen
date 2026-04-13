import { Hero } from "@/Components/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Products } from "@/Components/Products/Products";
import { UnderHeroLines } from "@/Components/Lines/UnderHeroLines/UnderHeroLines";
import { UnderProductsLines } from "@/Components/Lines/UnderProductsLines/UnderProductsLines";
import { Advantages } from "@/Components/Advantages/Advantages";
import { UnderAdvantagesLines } from "@/Components/Lines/UnderAdvantagesLines/UnderAdvantagesLines";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
      <UnderHeroLines />
      <Products />
      <UnderProductsLines />
      <Advantages />
      <UnderAdvantagesLines />
    </>
  );
}
