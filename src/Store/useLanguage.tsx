import { create } from "zustand";

type Languages = "uk" | "en";

type LanguageStore = {
  language: Languages;
  setLanguage: (language: Languages) => void;
};

export const useLanguage = create<LanguageStore>((set) => ({
  language: "uk",
  setLanguage: (language) => set({ language }),
}));
