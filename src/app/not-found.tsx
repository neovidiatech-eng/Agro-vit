"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();
  const {t} = useTranslation();
  
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">{t("not_found.heading")}</p>
        <Link href="/" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
          {t("not_found.home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
