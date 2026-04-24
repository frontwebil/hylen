import { AboutAdvantages } from "@/Components/AboutPage/AboutAdvantages/AboutAdvantages";
import { Hero } from "@/Components/AboutPage/Hero/Hero";
import { Header } from "@/Components/Layout/Header/Header";
import { WhoWeAre } from "../../Components/AboutPage/WhoWeAre/WhoWeAre";
import { LinesWithInner } from "@/Components/AboutPage/Lines/LinesWithInner/LinesWithInner";
import { WeCreating } from "@/Components/AboutPage/WeCreating/WeCreating";
import { WhoWeCreateFor } from "@/Components/AboutPage/WhoWeCreateFor/WhoWeCreateFor";
import { PeopleHylen } from "@/Components/AboutPage/PeopleHylen/PeopleHylen";
import { SymetricLine } from "@/Components/AboutPage/Lines/SymetricLine/SymetricLine";
import { UniqHylen } from "@/Components/AboutPage/UniqHylen/UniqHylen";
import { ProductionPower } from "@/Components/AboutPage/ProductionPower/ProductionPower";
import { Repair } from "@/Components/AboutPage/Repair/Repair";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { UnderByroLines } from "@/Components/Lines/UnderByroLines/UnderByroLines";

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <AboutAdvantages />
      <WhoWeAre />
      <LinesWithInner />
      <WeCreating />
      <WhoWeCreateFor />
      {/* <PeopleHylen /> */}
      {/* <SymetricLine /> */}
      {/* <UniqHylen /> */}
      {/* <ProductionPower /> */}
      {/* <Repair /> */}
      {/* <Footer /> */}
    </>
  );
}
