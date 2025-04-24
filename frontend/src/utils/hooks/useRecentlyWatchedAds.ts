import { useEffect, useState } from "react";
import {ProductItemProps} from "../../types/common/product-item-props.ts";

export function useRecentlyWatched() {
    const [items, setItems] = useState<ProductItemProps[]>([]);

    useEffect(() => {
        const loadItems = () => {
            try {
                const saved = localStorage.getItem("recentlyWatched");
                if (saved) setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load recently watched items:", e);
            }
        };
        loadItems();
    }, []);

    useEffect(() => {
        localStorage.setItem("recentlyWatched", JSON.stringify(items));
    }, [items]);

    const addToRecentlyWatched = (product: ProductItemProps) => {
        setItems(prev => {
            const filtered = prev.filter(item => item.id !== product.id);
            return [product, ...filtered].slice(0, 6);
        });
    };

    return { items, addToRecentlyWatched };
}