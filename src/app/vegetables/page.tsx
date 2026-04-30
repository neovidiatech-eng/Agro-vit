"use client";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { vegetables } from "@/data/products";
import { useTranslation } from "react-i18next";

const Vegetables = () => {
    const {t} = useTranslation();
  
  return (
    <div>
      <PageBanner title={t("vegetables.banner_title")} breadcrumb={t("vegetables.banner_breadcrumb")} />
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle={t("vegetables.subtitle")}
            title={t("vegetables.main_title")}
          />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("vegetables.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vegetables.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vegetables;
