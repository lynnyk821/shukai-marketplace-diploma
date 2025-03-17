import z from 'zod';

export const newAdvertisementSchema = z.object({
    name: z.string()
        .min(1, "Назва обов'язкова")
        .min(5, "Назва повинна містити щонайменше 5 символів"),
    description: z.string()
        .min(1, "Опис обов'язковий")
        .min(40, "Опис обов'язковий")
        .max(3000, "Максимальна description довжина не може бути більша за 3000 символів"),
    category: z.string().min(1, "Оберіть категорію"),
    price: z.number()
        .min(1, "Ціна повинна бути більше 0")
        .max(1000000, "Максимальна ціна - 1 000 000"),
    region: z.object({
        regionName: z.string().min(1, "Оберіть регіон"),
        cityName: z.string().min(1, "Оберіть місто"),
        description: z.string().min(1, "Опис обов'язковий"),
    }),
    photos: z.array(z.string()).refine(
        (photos) => photos.some((photo) => photo !== ""),
        "Завантажте щонайменше одне фото"
    ),
    userId: z.number().min(0, "Користувач обов’язковий"),
    deliveryMethods: z.array(z.number()).min(1, "Оберіть хоча б один метод доставки"),
    paymentMethods: z.array(z.number()).min(1, "Оберіть хоча б один метод оплати"),
});