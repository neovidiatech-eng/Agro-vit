"use client";
import { motion } from "framer-motion";
export const dynamic = "force-dynamic";
import Link from "next/link";
import {
  Sprout,
  Scissors,
  Droplets,
  Snowflake,
  Package,
  Truck,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import heroStrawberries from "@/assets/hero-strawberries.jpg";
import heroMixed from "@/assets/hero-mixed.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const productionSteps = [
    {
      icon: Sprout,
      title: t("about.production.steps.farming.title"),
      desc: t("about.production.steps.farming.desc"),
    },
    {
      icon: Scissors,
      title: t("about.production.steps.sorting.title"),
      desc: t("about.production.steps.sorting.desc"),
    },
    {
      icon: Droplets,
      title: t("about.production.steps.cooling.title"),
      desc: t("about.production.steps.cooling.desc"),
    },
    {
      icon: Snowflake,
      title: t("about.production.steps.iqf.title"),
      desc: t("about.production.steps.iqf.desc"),
    },
    {
      icon: Package,
      title: t("about.production.steps.packaging.title"),
      desc: t("about.production.steps.packaging.desc"),
    },
    {
      icon: Truck,
      title: t("about.production.steps.shipping.title"),
      desc: t("about.production.steps.shipping.desc"),
    },
  ];

  return (
    <div className="overflow-hidden">
      <PageBanner
        title={t("about.pageTitle")}
        breadcrumb={t("about.breadcrumb")}
      />

      {/* Main About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={
                  typeof heroStrawberries === "string"
                    ? heroStrawberries
                    : heroStrawberries.src
                }
                alt="Agro Plus Products"
                className="rounded-xl shadow-lg col-span-2 h-64 w-full object-cover"
              />
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={typeof heroMixed === "string" ? heroMixed : heroMixed.src}
                alt="Frozen Fruits"
                className="rounded-xl shadow-lg col-span-2 h-64 w-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold block mb-2">
                {t("about.experience")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t("about.mainTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about.description1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 ">
                {t("about.description2")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.description3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {["shipments", "service", "premium", "quality"].map((stat) => (
                  <div
                    key={stat}
                    className="flex items-center gap-2 text-foreground font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    {t(`about.stats.${stat}`)}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand & Private Label Section */}
      <section className="py-20 section-light bg-muted/30">
        <div className="container">
          <SectionTitle
            subtitle={t("about.brand.subtitle")}
            title={t("about.brand.title")}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about.brand.p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.brand.p2")}
              </p>
              <ul className="space-y-3 text-foreground text-sm sm:text-base">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{t(`about.brand.list.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={
                  typeof heroStrawberries === "string"
                    ? heroStrawberries
                    : heroStrawberries.src
                }
                alt="Agro Plus Brand"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl hidden md:block shadow-lg border border-white/10">
                <p className="text-xl font-bold text-gold">
                  {t("about.brand.iqf_badge.title", "IQF")}
                </p>
                <p className="text-sm">
                  {t("about.brand.iqf_badge.subtitle", "Premium Technology")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Markets & Goals Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["mission", "vision", "markets", "goal"].map((card, i) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {t(`about.cards.${card}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`about.cards.${card}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-20 section-green bg-primary text-primary-foreground">
        <div className="container">
          <SectionTitle
            subtitle={t("about.production.subtitle")}
            title={t("about.production.title")}
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <step.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("about.cta.title")}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t("about.cta.desc")}
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gold text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-lg"
          >
            {t("about.cta.btn")}
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
