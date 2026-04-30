"use client";
import Link from "next/link";
import heroFarm from "@/assets/hero-farm.jpg";
import { useTranslation } from "react-i18next";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  const {t} = useTranslation();
 return (
   <section className="relative h-[300px] overflow-hidden">
    <img src={typeof heroFarm === 'string' ? heroFarm : heroFarm.src} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
          <Link href="/" className="hover:text-gold transition-colors">{t("navbar.home")}</Link>
          <span>›</span>
          <span className="text-gold">{breadcrumb}</span>
        </div>
      </div>
    </div>
  </section>
 )
};

export default PageBanner;
