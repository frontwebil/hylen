import { Repair } from "@/Components/AboutPage/Repair/Repair";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { Products } from "@/Components/MainPage/Products/Products";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";

export default async function page() {
  const catalogByLang = await getHomepageCatalogGrouped();

  return (
    <>
      <Header />
      <Products catalogByLang={catalogByLang} />
      <Repair />
      <Footer />
    </>
  );
}
