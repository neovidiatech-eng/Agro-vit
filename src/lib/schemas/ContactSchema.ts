import z from "zod";
import { TFunction } from "i18next";

export const getContactSchema = (t: TFunction) => z.object({
    name: z.string().min(1, t("form-validation.name")),
    email: z.string().email(t("form-validation.email")),
    phone: z.string().min(1, t("form-validation.phone")),
    subject: z.string().optional(),
    message: z.string().min(1, t("form-validation.message")),
});

export type ContactSchema = z.infer<ReturnType<typeof getContactSchema>>;