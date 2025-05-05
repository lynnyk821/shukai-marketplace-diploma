import {UserLogoItemProps} from "./types/common/user-logo-item-props.ts";

export const BACKEND_URL = "http://localhost:8080";

export const LOGO_NAME = "Shukai!"

export const COLORS = [
    { color: "cyan-200",    code: "#A5D8E6" },      /*0 - index*/
    { color: "teal-200",    code: "#81E6D9" },
    { color: "yellow-200",  code: "#FDE68A" },
    { color: "red-200",     code: "#FECACA" },
    { color: "green-200",   code: "#A7F3D0" },
    { color: "blue-200",    code: "#BFDBFE" },
    { color: "purple-200",  code: "#DDD6FE" },
    { color: "pink-200",    code: "#FBCFE8" },
    { color: "violet-200",  code: "#E9D5FF" },
    { color: "emerald-200", code: "#BBF7D0" },      /*9 - index*/
];

export const USER_LOGO_LIST: UserLogoItemProps[] = [
    { icon: "fluent-mdl2:product",       text: "Мої товари",       href: "/my/ads" },
    { icon: "heroicons:shopping-bag",    text: "Мої покупки",      href: "/my/purchases" },
    { icon: "ep:sell",                   text: "Мої продажі",      href: "/my/sales" },
    { icon: "iconoir:wallet",            text: "Гаманець",         href: "/my/wallet" },
    { icon: "iconoir:profile-circle",    text: "Профіль",          href: "/my/profile" },
    { icon: "lsicon:thumb-up-outline",   text: "Мої відгуки",      href: "/my/reviews" },
    { icon: "solar:settings-outline",    text: "Мої налаштування", href: "/my/settings" },
    { icon: "ion:exit-outline",          text: "Вихід",            href: "/logout" },
]

export const APP_DESCRIPTION =
    "Shukai — це сучасна онлайн-платформа оголошень для зручного пошуку товарів, послуг та пропозицій. " +
    "Тут ви можете швидко знайти цікаві пропозиції, купити або продати потрібні речі, орендувати житло чи знайти роботу."

export const SLOGAN = [
    "Від гусей до мерседесів – тут є все!",
    "Тут навіть холодильник знайде нову сім’ю.",
    "Не треба кричати на базарі – напишіть тут.",
]

export const MESSAGES = [
    { username: "You", avatar: { color: "#eee" },   text: "Hello, how are you doing today?", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "I'm doing well, thank you! How about you?", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "I’m great! Just finishing up some work.", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "Nice! What kind of work are you doing?", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "I'm working on a project for school.", isMe: true },
     { username: "UserTwo", avatar: { color: "#414141" }, text: "That sounds interesting! What’s the project about?", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "It’s about web development, actually.", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "That’s awesome! I love web development.", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "Yeah, I’m learning React right now!", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "Oh, nice! React is great.", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "It’s a bit tricky, but I’m getting the hang of it.", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "It takes time, but you’ll do great.", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "Thanks! I appreciate the support.", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "Anytime! Do you have any questions?", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "I’m actually curious about React hooks.", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "Ah, hooks are a great feature in React!", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "How do they work exactly?", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "They let you use state and other React features without writing a class.", isMe: false },
    { username: "You", avatar: { color: "#eee" },   text: "That sounds really useful!", isMe: true },
    { username: "UserTwo", avatar: { color: "#414141" }, text: "It definitely is! Give them a try.", isMe: false }
];