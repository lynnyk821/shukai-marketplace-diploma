// storageUtils.ts

/**
 * Зберігає дані у localStorage.
 * @param key - Ключ, за яким будуть збережені дані.
 * @param value - Значення, яке потрібно зберегти. Перетворюється в JSON-строку.
 */
export function saveToLocalStorage<T>(key: string, value: T): void {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error(`Помилка при збереженні в localStorage за ключем "${key}":`, error);
    }
}

/**
 * Отримує дані з localStorage.
 * @param key - Ключ, за яким отримуються дані.
 * @returns Значення, яке було збережене, або null, якщо даних немає чи виникла помилка.
 */
export function getFromLocalStorage<T>(key: string): T | null {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null || serializedValue.trim() === '') {
            return null;
        }
        return JSON.parse(serializedValue) as T;
    } catch (error) {
        console.error(`Помилка при отриманні даних з localStorage за ключем "${key}":`, error);
        return null; // Возвращаем null в случае ошибки
    }
}

/**
 * Видаляє дані з localStorage.
 * @param key - Ключ, за яким дані будуть видалені.
 */
export function removeFromLocalStorage(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Помилка при видаленні з localStorage за ключем "${key}":`, error);
    }
}
