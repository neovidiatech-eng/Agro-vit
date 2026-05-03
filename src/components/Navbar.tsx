"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  // const isAr = currentLang.startsWith('ar');

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguageLabel = currentLang.startsWith("ar")
    ? "العربية"
    : currentLang.startsWith("es")
      ? "Español"
      : "English";

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="gradient-green text-primary-foreground py-2 text-sm">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/201010122421"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Phone size={14} />
              <span dir="ltr">+20 1010122421</span>
            </a>
            <a
              href="mailto:sales@agro-vit-food.com"
              className="hidden sm:flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Mail size={14} />
              <span>sales@agro-vit-food.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 border-l border-primary-foreground/20 pl-4">
              <a
                href="https://www.facebook.com/share/1Ay2u8dZga/"
                target="_blank"
                className="hover:text-gold transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/agro-plus-5748793bb"
                target="_blank"
                className="hover:text-gold transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <div className="text-primary-foreground/80 font-medium">
              Agro Vit Food Premium Exporters
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-card shadow-lg sticky top-0 z-50">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/assets/logoVit2.jpeg"
              alt="Agro Vit Food"
              className="h-16 w-auto rounded-sm"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-semibold transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
            >
              {t("navbar.home")}
            </Link>
            <Link
              href="/about"
              className={`font-semibold transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}
            >
              {t("navbar.about")}
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold transition-colors hover:text-primary text-foreground">
                {t("navbar.products")}
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50">
                <Link
                  href="/fruits"
                  className="block px-4 py-3 hover:bg-muted transition-colors rounded-t-lg font-medium"
                >
                  {t("navbar.fruits")}
                </Link>
                <Link
                  href="/vegetables"
                  className="block px-4 py-3 hover:bg-muted transition-colors rounded-b-lg font-medium"
                >
                  {t("navbar.vegetables")}
                </Link>
              </div>
            </div>
            <Link
              href="/gallery"
              className={`font-semibold transition-colors hover:text-primary ${isActive("/gallery") ? "text-primary" : "text-foreground"}`}
            >
              {t("navbar.gallery")}
            </Link>
            <Link
              href="/contact"
              className={`font-semibold transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}
            >
              {t("navbar.contact")}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-2 px-6 py-2.5 border border-primary rounded-md hover:bg-muted transition-colors font-medium text-sm">
                <span className="border-primary">
                  <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                </span>
                {currentLanguageLabel}
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[150px] z-50">
                <button
                  onClick={() => changeLanguage("ar")}
                  className={`w-full text-start px-4 py-3 hover:bg-muted transition-colors rounded-t-lg font-medium ${currentLang.startsWith("ar") ? "bg-muted/50 text-primary" : ""}`}
                >
                  العربية
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full text-start px-4 py-3 hover:bg-muted transition-colors font-medium border-y border-border/50 ${currentLang.startsWith("en") ? "bg-muted/50 text-primary" : ""}`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className={`w-full text-start px-4 py-3 hover:bg-muted transition-colors rounded-b-lg font-medium ${currentLang.startsWith("es") ? "bg-muted/50 text-primary" : ""}`}
                >
                  Español
                </button>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border pb-4">
            <div className="container flex flex-col gap-2 pt-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="py-2 font-semibold hover:text-primary"
              >
                {t("navbar.home")}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="py-2 font-semibold hover:text-primary"
              >
                {t("navbar.about")}
              </Link>

              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="py-2 font-semibold hover:text-primary text-right flex items-center gap-1"
              >
                {t("navbar.products")}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {productsOpen && (
                <div className="pr-4 flex flex-col gap-1">
                  <Link
                    href="/fruits"
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-muted-foreground hover:text-primary"
                  >
                    {t("navbar.fruits")}
                  </Link>
                  <Link
                    href="/vegetables"
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-muted-foreground hover:text-primary"
                  >
                    {t("navbar.vegetables")}
                  </Link>
                </div>
              )}
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="py-2 font-semibold hover:text-primary"
              >
                {t("navbar.gallery")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="py-2 font-semibold hover:text-primary"
              >
                {t("navbar.contact")}
              </Link>
              <div className="border-t border-border mt-2 pt-4">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between px-4 gap-2 py-3 bg-muted rounded-lg font-bold"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>{currentLanguageLabel}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {langOpen && (
                  <div className="flex flex-col gap-1 mt-2 px-2">
                    <button
                      onClick={() => changeLanguage("ar")}
                      className={`py-2 text-start px-4 rounded-md hover:bg-muted transition-colors ${currentLang.startsWith("ar") ? "text-primary bg-muted/50" : "text-muted-foreground"}`}
                    >
                      العربية
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`py-2 text-start px-4 rounded-md hover:bg-muted transition-colors ${currentLang.startsWith("en") ? "text-primary bg-muted/50" : "text-muted-foreground"}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("es")}
                      className={`py-2 text-start px-4 rounded-md hover:bg-muted transition-colors ${currentLang.startsWith("es") ? "text-primary bg-muted/50" : "text-muted-foreground"}`}
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
