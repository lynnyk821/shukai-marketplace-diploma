import {z} from "zod";

export const orderSchema = z.object({
    userInfo: z.object({
        firstName: z.string().min(2, "Ім'я обов'язкове"),
        lastName: z.string().min(2, "Прізвище обов'язкове"),
        middleName: z.string().optional(), // Zod: string | undefined
        phoneNumber: z.string().regex(/^\+?\d{10,15}$/, "Некоректний номер телефону"),
    }),
    adInfo: z.object({
        sellerName: z.string(),
        adName: z.string(),
        price: z.number(),
    }),
    deliveryMethod: z.object({
        service: z.string(),
        city: z.string(),
        warehouse: z.string(),
    }),
    paymentMethod: z.string(),
});