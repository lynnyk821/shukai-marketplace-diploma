import AdditionalSellerProductsLayout from "./AdditionalSellerProductsLayout.tsx";
import {Title} from "../../../../../../common-components/Title/Title.tsx";
import ProductItem from "../../../../../../common-components/ProductItem/ProductItem.tsx";
import {PRODUCT_ITEMS} from "../../../../../../globals-env.ts";

type Props = {
    title: string,
}

export default function AdditionalSellerProducts({title}: Props) {
    return (
        <AdditionalSellerProductsLayout>
            <Title text={title} />
            <ul className={"grid grid-cols-6 gap-x-4"}>
                {PRODUCT_ITEMS.slice(0, 6).map((product) =>
                    <ProductItem className={"w-full h-60"} product={product} size={"sm"}/>
                )}
            </ul>

        </AdditionalSellerProductsLayout>
    );
};