"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  light?: boolean;
  titleSize?: string;
}

const SectionTitle = ({ subtitle, title, light, titleSize }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <span className={`inline-block text-sm font-bold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full ${light ? "bg-primary-foreground/10 text-gold" : "bg-primary/10 text-primary"}`}>
      {subtitle}
    </span>
    <h2 className={`${titleSize || "text-2xl md:text-3xl lg:text-4xl"} font-extrabold leading-loose ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="flex items-center justify-center gap-2 mt-5">
      <div className="w-12 h-0.5 bg-gold rounded-full" />
      <div className="w-3 h-3 rounded-full border-2 border-gold" />
      <div className="w-12 h-0.5 bg-gold rounded-full" />
    </div>
  </motion.div>
);

export default SectionTitle;
