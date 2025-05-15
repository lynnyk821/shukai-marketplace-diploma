import { useEffect, useState } from "react";
import { OrderItem } from "../../types/common/order-item.ts";
import { useAppStore } from "./useAppStore.ts";

export function useCart() {
    const { setCartCapacity } = useAppStore();
    const [cart, setCart] = useState<OrderItem[]>(() => {
        if (typeof window === "undefined") return [];
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setCartCapacity(cart.length);
    }, [cart]);

    const addToCart = (item: OrderItem) => {
        setCart(prev => {
            const exists = prev.some(i => i.advertisement.id === item.advertisement.id);
            return exists ? prev : [...prev, item];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart(prev => prev.filter(item => item.advertisement.id !== itemId));
    };

    return {
        cart,
        addToCart,
        removeFromCart
    };
}
