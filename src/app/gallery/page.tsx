"use client";
import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { useTranslation } from "react-i18next";

import image1 from "@/assets/gallery/production.jpeg";
import image2 from "@/assets/gallery/harvest.jpeg";
import image3 from "@/assets/gallery/image3.jpeg";
import image4 from "@/assets/gallery/تغليف.jpeg";
import image5 from "@/assets/gallery/image5.jpeg";
import image6 from "@/assets/gallery/image6.jpeg";
import image7 from "@/assets/gallery/image7.jpeg";
import image8 from "@/assets/gallery/حصاد.jpeg";
import image9 from "@/assets/gallery/background.jpeg";

const Gallery = () => {
    const {t} = useTranslation();
  
const galleryImages = [
    {
      url: image1,
      title: t("gallery.images.strawberry_sorting"),
      category: t("gallery.categories.production")
    },
    {
      url: image2,
      title: t("gallery.images.our_farms"),
      category: t("gallery.categories.harvest")
    },
    {
      url: image3,
      title: t("gallery.images.b2b_packaging"),
      category: t("gallery.categories.packaging")
    },
    {
      url: image4,
      title: t("gallery.images.auto_cutting"),
      category: t("gallery.categories.production")
    },
    {
      url: image6,
      title: t("gallery.images.cold_storage"),
      category: t("gallery.categories.facilities")
    },
    {
      url: image5,
      title: t("gallery.images.iqf_tunnel"),
      category: t("gallery.categories.facilities")
    },
    {
      url: image7,
      title: t("gallery.images.quality_check"),
      category: t("gallery.categories.facilities")
    },
    {
      url: image8,
      title: t("gallery.images.harvest_day"),
      category: t("gallery.categories.harvest")
    },
    {
      url: image9,
      title: t("gallery.images.farm_landscape"),
      category: t("gallery.categories.harvest")
    }
  ];
   
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageBanner title={t("gallery.pageTitle")} breadcrumb={t("gallery.breadcrumb")}/>

      <div className="container px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-square bg-muted cursor-pointer"
            >
              <img
                src={typeof image.url === 'string' ? image.url : image.url.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
