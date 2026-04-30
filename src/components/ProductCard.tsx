"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const {t} = useTranslation();
  return (
    <Link href={`/product/${product.id}`} className="block h-full cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative bg-card rounded-2xl overflow-hidden card-lift border border-border h-full flex flex-col"
      >
        <div className="relative overflow-hidden aspect-square">
          <img
            src={typeof product.image === 'string' ? product.image : product.image.src}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-primary-foreground text-sm leading-relaxed">{t(product.description)}</p>
          </div>
        </div>
        <div className="p-4 text-center flex-grow flex items-center justify-center bg-card z-10">
          <h3 className="text-lg font-bold text-foreground">{t(product.name)}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
