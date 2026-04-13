import { Hero } from "@/Components/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Products } from "@/Components/Products/Products";
import { UnderHeroLines } from "@/Components/UnderHeroLines/UnderHeroLines";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
      <UnderHeroLines />
      <Products />
    </>
  );
}
