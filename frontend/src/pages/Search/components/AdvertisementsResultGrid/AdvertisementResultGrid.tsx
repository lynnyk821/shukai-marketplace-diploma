import AdvertisementResultGridLayout from "./AdvertisementResultGridLayout.tsx";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import {useEffect, useState} from "react";
import {ProductItemProps} from "../../../../types/common/product-item-props.ts";
import {BACKEND_URL} from "../../../../globals-env.ts";
import {useLocation} from "react-router-dom";

export default function AdvertisementResultGrid() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (searchParams) {
            const path = `${BACKEND_URL}/search-service/api/search?${searchParams.toString()}&page=0&limit=25`;

            fetch(path)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Помилка: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setProducts(data);
                })
                .catch((error) => {
                    console.error("Помилка завантаження даних:", error);
                });
            console.log(path);
        }
    }, [location.search]);

    return (
        <AdvertisementResultGridLayout>
            {products.map((product : ProductItemProps) =>
                <ProductItem
                    key={product.id}
                    className={"w-full h-80"}
                    size={"md"}
                    product={product}
                />
            )}
        </AdvertisementResultGridLayout>
    );
};