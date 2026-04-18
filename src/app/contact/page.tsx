import { ContactFormSection } from "@/Components/ContactFormSection/ContactFormSection";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";

export default function page() {
  return (
    <>
      <Header />
      <ContactFormSection />
      <Footer />
    </>
  );
}
