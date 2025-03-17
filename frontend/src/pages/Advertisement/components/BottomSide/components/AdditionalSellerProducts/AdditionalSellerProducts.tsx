import AdditionalSellerProductsLayout from "./AdditionalSellerProductsLayout.tsx";
import {MainTitle} from "../../../../../../common-components/Titles/MainTitle/MainTitle.tsx";
import ProductItem from "../../../../../../common-components/ProductItem/ProductItem.tsx";
import {PRODUCT_ITEMS} from "../../../../../../globals-env.ts";

type Props = {
    title: string,
    products: ProductItem[],
}

export default function AdditionalSellerProducts({title}: Props) {
    return (
        <AdditionalSellerProductsLayout>
            <MainTitle text={title} size={"xl"} />
            <ul className={"grid grid-cols-6 gap-x-4"}>
                {PRODUCT_ITEMS.slice(0, 6).map((product) =>
                    <ProductItem className={"w-full h-60"} product={product} size={"sm"}/>
                )}
            </ul>

        </AdditionalSellerProductsLayout>
    );
};