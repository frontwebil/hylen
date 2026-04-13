import { Hero } from "@/Components/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";

export default function Home() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <Header />
      <Hero />
    </>
  );
}
