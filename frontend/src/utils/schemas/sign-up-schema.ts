import z from 'zod'

export const SignUpSchema = z.object({
    email: z.string()
        .email('Невірна електронна адреса'),
    username: z.string()
        .min(5, 'Ім’я користувача має містити щонайменше 5 символів'),
    password: z.string()
        .min(6, 'Пароль має містити щонайменше 6 символів'),
    phoneNumber: z.string()
        .min(10, 'Номер телефону має містити щонайменше 10 символів')
        .max(15, 'Номер телефону має містити не більше 15 символів')
        .regex(/^\+?\d{10,15}$/, 'Невірний формат номера телефону')
        .optional(),
});