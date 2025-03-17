import ProductsGridLayout from "./ProductsGridLayout.tsx";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import {ProductItemProps} from "../../../../types/common/product-item-props.ts";

type Props = {
    text: string,
    products: ProductItemProps[],
};

export default function ProductsGrid({text, products}: Props) {
    return (
        <ProductsGridLayout text={text}>
            <ul className={`grid grid-cols-5 gap-y-8 gap-x-4`}>
                {products.map((product: ProductItemProps, index) => (
                    <ProductItem
                        key={index}
                        className={"w-full h-[21rem]"}
                        product={product}
                        size={"md"}
                    />
                ))}
            </ul>
        </ProductsGridLayout>
    );
};