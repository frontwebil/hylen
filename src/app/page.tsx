import { Hero } from "@/Components/MainPage/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Products } from "@/Components/MainPage/Products/Products";
import { UnderHeroLines } from "@/Components/Lines/UnderHeroLines/UnderHeroLines";
import { UnderProductsLines } from "@/Components/Lines/UnderProductsLines/UnderProductsLines";
import { Advantages } from "@/Components/MainPage/Advantages/Advantages";
import { UnderAdvantagesLines } from "@/Components/Lines/UnderAdvantagesLines/UnderAdvantagesLines";
import { Byro } from "@/Components/MainPage/Byro/Byro";
import { UnderByroLines } from "@/Components/Lines/UnderByroLines/UnderByroLines";
import { Footer } from "@/Components/Layout/Footer/Footer";

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
      <Byro />
      <UnderByroLines />
      <Footer />
    </>
  );
}
