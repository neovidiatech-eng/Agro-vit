"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <footer className="section-green text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="bg-white p-4 rounded-xl inline-block mb-5 shadow-lg">
              <img
                src="/assets/logoVit2.jpeg"
                alt="Agro Vit Food"
                className="h-14 max-w-[150px] object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm mb-6">
              {t("footer.about_text")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1Ay2u8dZga/"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/agro-plus-5748793bb"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t("footer.products_title")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.home")}
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.about")}
              </Link>
              <Link
                href="/gallery"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.gallery")}
              </Link>
              <Link
                href="/fruits"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.fruits")}
              </Link>
              <Link
                href="/vegetables"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.vegetables")}
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                {t("footer.links.contact")}
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t("footer.products_title")}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link
                href="/product/frozen-strawberry"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.strawberry")}
              </Link>
              <Link
                href="/product/frozen-mango"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.mango")}
              </Link>
              <Link
                href="/product/frozen-peas"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.peas")}
              </Link>
              <Link
                href="/product/frozen-mixed-vegetables"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.mixed_veggies")}
              </Link>
              <Link
                href="/product/frozen-broccoli"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.broccoli")}
              </Link>
              <Link
                href="/product/frozen-okra"
                className="hover:text-gold transition-colors"
              >
                {t("footer.products_list.okra")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t("footer.contact_title")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/201019825773"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} className={isRtl ? "rotate-[270deg]" : ""} />
                <span dir="ltr">+20 101 982 5773</span>
              </a>
              <a
                href="mailto:sales@agro-vit-food.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                <span dir="ltr">sales@agro-vit-food.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Agro Vit Food Premium Exporters.{" "}
          {t("footer.rights_reserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
