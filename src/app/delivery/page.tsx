"use client";

import { FooterPageComponentText } from "@/Components/FooterPageComponent/FooterPageComponentText";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { useSiteSettings } from "@/Hooks/useSiteSettings";
import { useLanguage } from "@/Store/useLanguage";

export default function page() {
  const { language } = useLanguage();
  const settings = useSiteSettings();
  const copy = settings.pages.delivery;

  return (
    <>
      <Header />
      <FooterPageComponentText title={copy.title[language]} text={copy.text[language]} />
      <Footer />
    </>
  );
}
