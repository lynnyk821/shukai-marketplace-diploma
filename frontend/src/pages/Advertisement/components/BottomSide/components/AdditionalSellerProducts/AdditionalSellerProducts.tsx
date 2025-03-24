import AdditionalSellerProductsLayout from "./AdditionalSellerProductsLayout.tsx";
import {MainTitle} from "../../../../../../common-components/Titles/MainTitle/MainTitle.tsx";
import ProductItem from "../../../../../../common-components/ProductItem/ProductItem.tsx";
import {ProductItemProps} from "../../../../../../types/common/product-item-props.ts";

type Props = {
    title: string,
    products: ProductItemProps[],
}

export default function AdditionalSellerProducts({title, products}: Props) {
    return (
        <AdditionalSellerProductsLayout>
            <MainTitle text={title} size={"xl"} />
            <ul className={"grid grid-cols-6 gap-x-4"}>
                {products && products.map((product) =>
                    <ProductItem
                        className={"w-full h-60"}
                        product={product}
                        size={"sm"}
                    />
                )}
            </ul>

        </AdditionalSellerProductsLayout>
    );
};