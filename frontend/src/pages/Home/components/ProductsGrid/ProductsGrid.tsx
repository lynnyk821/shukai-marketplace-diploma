import {HomeProductItemProps} from "../../../../types/home-product-item-props.ts";
import HomeProductItem from "./components/HomeProductItem.tsx";
import noImage from "../../../../assets/jpg/no-image.jpg"
import ProductsGridLayout from "./ProductsGridLayout.tsx";

type Props = {
    text: string,
    products: HomeProductItemProps[],
};

export default function ProductsGrid({text, products}: Props) {
    return (
        <ProductsGridLayout text={text}>
            <ul className={`grid grid-cols-5 gap-y-8 gap-x-4`}>
                {products.map((product: HomeProductItemProps) => (
                    <HomeProductItem
                        id={product.id}
                        date={product.date}
                        name={product.name}
                        price={product.price}
                        image={noImage}
                    />
                ))}
            </ul>
        </ProductsGridLayout>
    );
};