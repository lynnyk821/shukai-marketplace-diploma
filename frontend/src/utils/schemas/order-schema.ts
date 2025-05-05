import { z } from "zod";

export const orderSchema = z.object({
    seller: z.object({
        id: z.number().optional(),
        name: z.string(),
    }),
    customer: z.object({
        id: z.number().optional(),
        firstName: z.string().min(2, "Ім'я обов'язкове"),
        lastName: z.string().min(2, "Прізвище обов'язкове"),
        middleName: z.string().optional(),
        phoneNumber: z.string().regex(/^\+?\d{10,15}$/, "Некоректний номер телефону"),
    }),
    delivery: z.object({
        service: z.string(),
        city: z.string(),
        warehouse: z.string(),
    }),
    advertisement: z.object({
        title: z.string(),
        image: z.string().optional(),
        price: z.number(),
        paymentMethod: z.string(),
    }),
});
