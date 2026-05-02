"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Leaf,
  Award,
  Snowflake,
  Truck,
  Package,
  Factory,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { fruits, vegetables } from "@/data/products";
import { useTranslation } from "react-i18next";

// Note: Video assets might need proper loading in Next.js
// import strawberryVid from "@/assets/strawberry-vid.mp4"; 

/* ─── Animated Counter ─── */
const Counter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const { i18n } = useTranslation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    Math.round(v).toLocaleString(i18n.language === "ar" ? "ar-EG" : "en-US"),
  );
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return (
    <span className="flex items-baseline justify-center gap-1">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix && <span className="text-xl">{suffix}</span>}
    </span>
  );
};

const Index = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const isEs = i18n.language?.startsWith("es");
  const headlineSize = "text-2xl md:text-3xl lg:text-4xl";

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const valuesItems = [
    { icon: Users, key: "v1" },
    { icon: ShieldCheck, key: "v2" },
    { icon: Leaf, key: "v3" },
    { icon: Award, key: "v4" },
  ];

  const whyUsItems = [
    { icon: Snowflake, key: "i1", num: "01" },
    { icon: Factory, key: "i2", num: "02" },
    { icon: Package, key: "i3", num: "03" },
    { icon: Truck, key: "i4", num: "04" },
  ];

  const statsData = [
    { value: 3000, suffix: "+", labelKey: "ton", subKey: "storage" },
    { value: 500, suffix: "+", labelKey: "shipment", subKey: "export" },
    { value: 7, suffix: "", labelKey: "fruit_label", subKey: "frozen" },
    { value: 16, suffix: "", labelKey: "veggie_label", subKey: "frozen" },
  ];
  const heroFeatures = t("index.hero.features", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="overflow-hidden">
      <HeroSlider />

      {/* ══════ Values ══════ */}
      <section className="py-20 -mt-1 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuesItems.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group text-center p-8 bg-card rounded-2xl card-lift border border-border overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[80px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <v.icon className="text-primary" size={30} />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">
                    {t(`index.values.${v.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`index.values.${v.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ About Section ══════ */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/assets/hero-mixed.jpg"
                  alt={t("index.hero.main_title")}
                  className="rounded-3xl shadow-2xl w-full"
                />{" "}
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-4 lg:-left-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl z-20"
              >
                <span className="text-5xl font-extrabold gradient-text">
                  8+
                </span>
                <p className="text-sm mt-1 text-primary-foreground/80">
                  {t("index.hero.years_exp")}
                </p>
              </motion.div>
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-bold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                {t("index.hero.badge")}
              </span>
              <h2
                className={`${headlineSize} font-extrabold text-foreground mt-3 mb-6 leading-tight`}
              >
                {t("index.hero.main_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                {t("index.hero.desc_1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {t("index.hero.desc_2")}
              </p>
              <div className="flex gap-6 flex-wrap mb-8">
                {(Array.isArray(heroFeatures) ? heroFeatures : []).map(
                  (text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-foreground font-medium"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      {text}
                    </div>
                  ),
                )}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:gap-3"
              >
                {t("index.hero.cta_discover")}
                <ArrowIcon size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ Products Categories ══════ */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            subtitle={t("index.categories.subtitle")}
            title={t("index.categories.title")}
          />{" "}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { link: "/fruits", img: fruits[0].image, key: "fruits" },
              { link: "/vegetables", img: vegetables[4].image, key: "veggies" },
            ].map((cat, i) => (
              <motion.div
                key={cat.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Link
                  href={cat.link}
                  className="group block relative rounded-3xl overflow-hidden h-[350px]"
                >
                  <img
                    src={typeof cat.img === 'string' ? cat.img : cat.img.src}
                    alt={t(`index.categories.${cat.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <h3 className="text-2xl font-extrabold text-primary-foreground mb-2">
                      {t(`index.categories.${cat.key}.title`)}
                    </h3>
                    <p className="text-primary-foreground/80 text-lg">
                      {t(`index.categories.${cat.key}.desc`)}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-gold font-bold group-hover:gap-3 transition-all">
                      {t("index.categories.browse")}
                      <ArrowIcon size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Featured Products ══════ */}
      <section className="py-24 section-light">
        <div className="container">
          <SectionTitle
            subtitle={t("index.featured.subtitle")}
            title={t("index.featured.title")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...fruits.slice(0, 4), ...vegetables.slice(0, 4)].map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/fruits"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              {t("index.featured.view_all")}
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Why Us ══════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image - Note: video source handled as direct path in public or next asset */}
        <div className="absolute inset-0">
          <video
            src="/assets/strawberry-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground/90" />
        </div>

        <div className="container relative z-10">
          <SectionTitle
            subtitle={t("index.why_us.subtitle")}
            title={t("index.why_us.title")}
            light
          />
          <p className="text-center text-primary-foreground/70 max-w-3xl mx-auto mb-14 leading-relaxed text-lg">
            {t("index.why_us.main_desc")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center p-8 glass rounded-2xl group hover:bg-primary-foreground/15 transition-all duration-500"
              >
                <span
                  className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} text-5xl font-extrabold text-primary-foreground/5 group-hover:text-gold/20 transition-colors`}
                >
                  {" "}
                  {item.num}
                </span>
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <item.icon className="text-gold" size={32} />
                </div>
                <h3 className="font-bold text-primary-foreground text-lg mb-3">
                  {t(`index.why_us.items.${item.key}.title`)}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  {t(`index.why_us.items.${item.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Stats ══════ */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionTitle
            subtitle={t("index.stats.subtitle")}
            title={t("index.stats.title")}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-card rounded-2xl card-lift border border-border"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p className="font-bold text-foreground text-base">
                  {t(`index.stats.${s.labelKey}`)}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {t(`index.stats.${s.subKey}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Certifications ══════ */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container text-center">
          <p className="text-muted-foreground font-semibold mb-8 uppercase tracking-widest text-sm">
            {t("index.certifications")}
          </p>
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-extrabold text-2xl shadow-sm">
                FDA
              </div>
              <span className={`text-xs font-semibold text-muted-foreground text-center ${isEs ? "max-w-[150px]" : ""}`}>
                {t("index.fda")}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                ISO
              </div>
              <span className={`text-xs font-semibold text-muted-foreground text-center ${isEs ? "max-w-[160px]" : ""}`}>
                9001:2015
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                ISO
              </div>
              <span className={`text-xs font-semibold text-muted-foreground text-center ${isEs ? "max-w-[160px]" : ""}`}>
                22000:2018
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-extrabold text-xl shadow-sm">
                GACC
              </div>
              <span className={`text-xs font-semibold text-muted-foreground text-center ${isEs ? "max-w-[160px]" : ""}`}>
                {t("index.gacc")}{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 gradient-green relative overflow-hidden">
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-bold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-gold">
              {t("index.cta.badge")}
            </span>
            <h2
              className={`${headlineSize} font-extrabold text-primary-foreground mb-6 leading-tight`}
            >
              {t("index.cta.title")}
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              {t("index.cta.desc")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              {t("index.cta.button")}
              <ArrowIcon size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
