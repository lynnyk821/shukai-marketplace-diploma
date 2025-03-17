import {PRODUCT_ITEMS} from "../../../../globals-env.ts";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import FavoriteProductsGridLayout from "./FavoriteProductsGridLayout.tsx";

export default function FavoriteProductsGrid() {
    return (
        <FavoriteProductsGridLayout>
            {PRODUCT_ITEMS.map((product) =>
                <ProductItem
                    className={"w-full h-[22rem]"}
                    size={"lg"}
                    product={product}
                />
            )}
        </FavoriteProductsGridLayout>
    );
};