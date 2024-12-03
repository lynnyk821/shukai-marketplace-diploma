import { useCallback } from "react";

export function useLocalStorage() {
    const saveToLocalStorage = useCallback(<T,>(key: string, value: T): void => {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`Error saving to localStorage with key "${key}":`, error);
        }
    }, []);

    const getFromLocalStorage = useCallback(<T,>(key: string): T | null => {
        try {
            const serializedValue = localStorage.getItem(key);

            if (!serializedValue || serializedValue.trim() === '') {
                return null;
            }

            return JSON.parse(serializedValue) as T;
        } catch (error) {
            console.error(`Error retrieving from localStorage with key "${key}":`, error);
            return null;
        }
    }, []);

    const removeFromLocalStorage = useCallback((key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing from localStorage with key "${key}":`, error);
        }
    }, []);

    return {
        saveToLocalStorage,
        getFromLocalStorage,
        removeFromLocalStorage,
    };
}
