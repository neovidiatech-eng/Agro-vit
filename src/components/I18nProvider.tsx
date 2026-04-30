"use client";
import i18nInstance from "@/i18n";
import { useEffect } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <I18nContent>{children}</I18nContent>
    </I18nextProvider>
  );
}

function I18nContent({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const lang = i18n.language?.slice(0, 2) || "en";
    const isArabic = lang === "ar";
    const dir = isArabic ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.classList.remove("rtl", "ltr");
    document.body.classList.add(dir);
    document.documentElement.classList.remove("font-almarai", "font-montserrat");
    document.documentElement.classList.add(isArabic ? "font-almarai" : "font-montserrat");
    document.documentElement.classList.add(`lang-${lang}`);
  }, [i18n.language]);

  return <>{children}</>;
}
