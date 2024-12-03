import {CategoryItemProps} from "./types/category-item-props.ts";
import {UserLogoItemProps} from "./types/user-logo-item-props.ts";

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
    { color: COLORS[0].code,  name: "Жінкам"    },
    { color: COLORS[1].code,  name: "Чоловікам" },
    { color: COLORS[2].code,  name: "Дітям"     },
    { color: COLORS[3].code,  name: "Одяг"      },
    { color: COLORS[4].code,  name: "Жінкам"    },
    { color: COLORS[5].code,  name: "Чоловікам" },
    { color: COLORS[6].code,  name: "Дітям"     },
    { color: COLORS[7].code,  name: "Одяг"      },
    { color: COLORS[8].code,  name: "Жінкам"    },
    { color: COLORS[7].code,  name: "Чоловікам" },
    { color: COLORS[4].code,  name: "Дітям"     },
    { color: COLORS[5].code,  name: "Одяг"      },
    { color: COLORS[6].code,  name: "Жінкам"    },
    { color: COLORS[0].code,  name: "Чоловікам" },
    { color: COLORS[2].code,  name: "Дітям"     },
    { color: COLORS[9].code,  name: "Одяг"      },
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