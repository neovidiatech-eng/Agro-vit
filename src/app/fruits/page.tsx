"use client";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { fruits } from "@/data/products";
import { useTranslation } from "react-i18next";

const Fruits = () => {
  const {t} = useTranslation();
  return (
    <div>
      <PageBanner title={t("fruits.banner_title")}  breadcrumb={t("fruits.banner_breadcrumb")} />
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle={t("fruits.subtitle")}
            title={t("fruits.main_title")}
          />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("fruits.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fruits.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fruits;
