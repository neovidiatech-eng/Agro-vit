"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, getContactSchema } from "@/lib/schemas/ContactSchema";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const contactSchema = getContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  // const onSubmit = (data: ContactSchema) => {
  //   console.log("Form Data:", data);
  //   toast.success("Message sent successfully!");
  //   reset();
  // };

  const onSubmit = async (data: ContactSchema) => {
    try {
      await emailjs.send(
        "service_5a5v424", // Service ID
        "template_adg3sr9", // Template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject || "No Subject",
          message: data.message,
        },
        "8c8HlsGEFnZP4KKf4",
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };
  return (
    <div>
      <PageBanner
        title={t("contact.banner.title")}
        breadcrumb={t("contact.banner.breadcrumb")}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {t("contact.about.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("contact.about.description")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">
                  {t("contact.info.title")}
                </h3>
                {[
                  {
                    icon: Phone,
                    label: t("contact.info.sales"),
                    value: "+20 101 982 5773",
                    href: "https://wa.me/201019825773",
                  },
                  {
                    icon: Mail,
                    label: t("contact.info.email"),
                    value: "sales@agro-vit-food.com",
                    href: "mailto:sales@agro-vit-food.com",
                  },
                  {
                    icon: Clock,
                    label: t("contact.info.hours"),
                    value: t("contact.info.workingHours"),
                    href: null,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          dir="ltr"
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {t("contact.address.title")}
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-primary mt-1 flex-shrink-0"
                    size={18}
                  />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">
                      {t("contact.address.company")}
                    </p>
                    <p>{t("contact.address.location")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <SectionTitle
                subtitle={t("contact.form.subtitle")}
                title={t("contact.form.title")}
                titleSize="text-xl md:text-2xl lg:text-3xl"
              />
              <p className="text-muted-foreground text-center mb-8 -mt-6">
                {t("contact.form.description")}
              </p>
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-destructive focus:ring-destructive" : "border-input focus:ring-ring"} bg-background text-foreground focus:outline-none focus:ring-1 transition-all`}
                      placeholder={t("contact.form.placeholders.name")}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-destructive focus:ring-destructive" : "border-input focus:ring-ring"} bg-background text-foreground focus:outline-none focus:ring-1 transition-all`}
                      placeholder={t("contact.form.placeholders.email")}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-destructive focus:ring-destructive" : "border-input focus:ring-ring"} bg-background text-foreground focus:outline-none focus:ring-1 transition-all`}
                      placeholder={t("contact.form.placeholders.phone")}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("contact.form.subject")}
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? "border-destructive focus:ring-destructive" : "border-input focus:ring-ring"} bg-background text-foreground focus:outline-none focus:ring-1 transition-all`}
                      placeholder={t("contact.form.placeholders.subject")}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-destructive focus:ring-destructive" : "border-input focus:ring-ring"} bg-background text-foreground focus:outline-none focus:ring-1 transition-all resize-none`}
                    placeholder={t("contact.form.placeholders.message")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t("contact.form.sending", "Sending...")
                    : t("contact.form.submit")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
