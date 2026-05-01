import { Repair } from "@/Components/AboutPage/Repair/Repair";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { Products } from "@/Components/MainPage/Products/Products";

export default function page() {
  return (
    <>
      <Header />
      <Products />
      <Repair />
      <Footer />
    </>
  );
}
