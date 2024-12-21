import {CategoryItemProps} from "./types/category-item-props.ts";
import {UserLogoItemProps} from "./types/user-logo-item-props.ts";
import {HomeProductItemProps} from "./types/home-product-item-props.ts";

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

export const SEARCH_CATEGORIES = ["Всі категорії",
    "Жінкам", "Чоловікам", "Дітям", "Аксесуари", "Для дому", "Краса і здоров'я",
    "Електроніка", "Автовари", "Зоотовари", "Будівництво", "Транспорт", "Дача та сад"
]

export const CATALOG_CATEGORIES: CategoryItemProps[] = [
    { color: COLORS[0].code,  name: "Електроніка"               },
    { color: COLORS[1].code,  name: "Нерухомість"               },
    { color: COLORS[2].code,  name: "Транспорт"                 },
    { color: COLORS[3].code,  name: "Робота"                    },
    { color: COLORS[4].code,  name: "Автотовари"                },
    { color: COLORS[5].code,  name: "Дитячі товари"             },
    { color: COLORS[6].code,  name: "Мода та стиль"             },
    { color: COLORS[7].code,  name: "Краса та здоров'я"         },
    { color: COLORS[8].code,  name: "Хобі та відпочинок"        },
    { color: COLORS[4].code,  name: "Тварини"                   },
    { color: COLORS[5].code,  name: "Послуги"                   },
    { color: COLORS[6].code,  name: "Будівництво"               },
    { color: COLORS[7].code,  name: "Навчання та розвиток"      },
    { color: COLORS[2].code,  name: "Інструменти та техніка"    },
    { color: COLORS[0].code,  name: "Продукти харчування"       },
    { color: COLORS[9].code,  name: "Зоотовари"                 },
]

export const USER_LOGO_LIST: UserLogoItemProps[] = [
    { icon: "fluent-mdl2:product",       text: "Мої товари",       href: "0" },
    { icon: "heroicons:shopping-bag",    text: "Мої покупки",      href: "1" },
    { icon: "ep:sell",                   text: "Мої продажі",      href: "2" },
    { icon: "iconoir:wallet",            text: "Гаманець",         href: "3" },
    { icon: "iconoir:profile-circle",    text: "Профіль",          href: "4" },
    { icon: "lsicon:thumb-up-outline",   text: "Мої відгуки",      href: "5" },
    { icon: "solar:settings-outline",    text: "Мої налаштування", href: "6" },
    { icon: "ion:exit-outline",       text: "Вихід",            href: "7" },
]

export const APP_DESCRIPTION =
    "Shukai — це сучасна онлайн-платформа оголошень для зручного пошуку товарів, послуг та пропозицій. " +
    "Тут ви можете швидко знайти цікаві пропозиції, купити або продати потрібні речі, орендувати житло чи знайти роботу."

export const SLOGAN = [
    "Від гусей до мерседесів – тут є все!",
    "Тут навіть холодильник знайде нову сім’ю.",
    "Не треба кричати на базарі – напишіть тут.",
]

export const PRODUCT_ITEMS: HomeProductItemProps[] = [
    {id: 0, name: "Зимові термочоботи", date: "Опубліковано о 11:45", price: 100},
    {id: 1, name: "Шуба крута, натуральна, короткострижена, довга kepka",  date: "Опубліковано о 11:45", price: 200},
    {id: 2, name: "Металопластикові вікна та двері, установка вікон Шепетівка.",  date: "Опубліковано о 11:45", price: 300},
    {id: 3, name: "Шезлонг-люлька для малюка",  date: "Опубліковано о 11:45", price: 400},
    {id: 4, name: "Тканевые ролеты (рулонные шторы) от производителя",  date: "Опубліковано о 11:45", price: 500},
    {id: 5, name: "Кухні стандартні та під замовлення. Гардеробні, шафи-купе та распашні.",  date: "Опубліковано о 11:45", price: 600},
    {id: 6, name: "Арка крила Tesla Model Y накладка крыла молдинг перед зад",  date: "Опубліковано о 11:45", price: 700},
    {id: 7, name: "Электронные чacы SKMEI 1167 ARMY GREEN вoдoнепроницаемый и пpoтивоудар",  date: "Опубліковано о 11:45", price: 800},
    {id: 8, name: "Кухні стандартні та під замовлення. Гардеробні, шафи-купе та распашні.",  date: "Опубліковано о 11:45", price: 900},
    {id: 9, name: "Английский язык, переводы, переписка,,реклама на маркетплэйсах",  date: "Опубліковано о 11:45", price: 0},
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
