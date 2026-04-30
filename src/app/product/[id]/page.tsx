"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Calendar,
  Info,
  CheckCircle2,
} from "lucide-react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ProductDetailContent = () => {
  const params = useParams();
  const id = params?.id as string;
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {t("product_details.not_found")}
        </h1>
        <Link href="/">
          <Button variant="outline">
            {" "}
            {t("product_details.back_to_home")}
          </Button>
        </Link>
      </div>
    );
  }

  const baseKey = product.name.replace(".name", "");

  const packagingList = t(`${baseKey}.packaging`, {
    returnObjects: true,
  }) as string[];
  const sizesList = t(`${baseKey}.sizes`, { returnObjects: true }) as string[];

  const safePackaging = Array.isArray(packagingList) ? packagingList : [];
  const safeSizes = Array.isArray(sizesList) ? sizesList : [];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <Link
          href={`/${product.category}`}
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowRight className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
          {t("product_details.back_to_list")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft h-[400px] lg:h-[600px] relative group p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <img
              src={typeof product.image === 'string' ? product.image : product.image.src}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 w-fit">
              {product.category === "fruits"
                ? t("product_details.fruits_label")
                : t("product_details.veggies_label")}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-loose">
              {t(product.name)}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t(product.description)}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start text-primary mb-3">
                  <Package className={`w-6 h-6 ${isRtl ? "ml-3" : "mr-3"} mt-1 `} />
                  <h3 className="font-bold ">
                    {t("product_details.packaging_title")}
                  </h3>
                </div>
                <ul className="space-y-2 ml-3">
                  {safePackaging.map((pack, i) => (
                    <li
                      key={i}
                      className="flex items-center text-muted-foreground text-sm "
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-primary/50 ${isRtl ? "ml-2" : "mr-2"}`}
                      />{" "}
                      {pack}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start text-primary mb-3">
                  <Info className={`w-6 h-6 ${isRtl ? "ml-2" : "mr-2"} mt-1 `} />
                  <h3 className="font-bold">
                    {t("product_details.packaging_title")}
                  </h3>
                </div>
                <ul className="space-y-2 ml-3">
                  {safeSizes.map((size, i) => (
                    <li
                      key={i}
                      className="flex items-center text-muted-foreground text-sm"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-primary/50 ${isRtl ? "ml-2" : "mr-2"}`}
                      />
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-5 rounded-xl border border-border shadow-sm sm:col-span-2 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start text-primary mb-3">
                    <Calendar className={`w-6 h-6 ${isRtl ? "ml-3" : "mr-3"} mt-1 `} />
                    <h3 className="font-bold">
                      {t("product_details.season_title")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm flex items-center ml-3">
                    {t(product.season)}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-start text-primary mb-3">
                    <CheckCircle2 className={`w-6 h-6 ${isRtl ? "ml-2" : "mr-2"} mt-1 mx-1`} />
                    <h3 className="font-bold">
                      {" "}
                      {t("product_details.benefits_title")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm ml-1">
                    {t(product.benefits)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full text-base h-14 px-8 shadow-glow hover:-translate-y-1 transition-transform"
                >
                  {t("product_details.request_quote")}
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center sm:text-right">
              {t("product_details.private_label_note")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  return <ProductDetailContent />;
}
