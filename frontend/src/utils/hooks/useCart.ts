import { useEffect, useState } from "react";
import { CartItemProps } from "../../types/common/cart-item-props.ts";
import {useAppStore} from "./useAppStore.ts";

export function useCart() {
    const { setCartCapacity } = useAppStore();
    const [cart, setCart] = useState<CartItemProps[]>(() => {
        if (typeof window === "undefined") return [];
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setCartCapacity(cart.length);
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            return existing
                ? prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
                : [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId: number) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: number, newQuantity: number) => {
        setCart(prev => prev.map(item =>
            item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity
    };
}