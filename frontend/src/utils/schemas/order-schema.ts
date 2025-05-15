import { z } from "zod";

export const orderSchema = z.object({
    customer: z.object({
        firstName: z.string().min(2, "Ім'я обов'язкове"),
        middleName: z.string().min(2, "Прізвище обов'язкове"),
        lastName: z.string().min(2, "По-батькові обов'язкове"),
        phoneNumber: z.string().regex(/^\+?\d{10,15}$/, "Некоректний номер телефону"),
    }),
    delivery: z.object({
        service: z.string().min(2, "Оберіть сервіс"),
        city: z.string().min(2, "Оберіть населений пункт"),
        warehouse: z.string().min(2, "Оберіть відділення"),
    }),
    advertisement: z.object({
        id: z.string(),
        title: z.string(),
        image: z.string().optional(),
        price: z.number(),
        seller: z.string(),
    }),
    paymentMethod: z.string(),
});
