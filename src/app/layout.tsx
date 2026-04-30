import type { Metadata } from "next";
import { Montserrat, Almarai } from "next/font/google";
import "./globals.css";
import "./App.css";
import { QueryProvider } from "@/components/QueryProvider";
import I18nProvider from "@/components/I18nProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agro Vit Food",
  description: "Fresh fruits and vegetables",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${almarai.variable}`}>
      <body>
        <I18nProvider>
          <QueryProvider>
            <TooltipProvider>
              <Navbar />
              <WhatsAppButton />
              <main>{children}</main>
              <Footer />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
