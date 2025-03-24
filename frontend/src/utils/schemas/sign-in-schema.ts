import z from "zod"

export const SignInSchema = z.object({
    email: z.string().min(1, 'Електронна адреса є обов’язковою').email('Невірна електронна адреса'),
    password: z.string().min(1, 'Пароль є обов’язковим')
});