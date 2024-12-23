import ProductItemLayout from "./ProductItemLayout.tsx";
import {ProductItemProps} from "../../types/product-item-props.ts";
import ProductImage from "./components/ProductImage.tsx";
import ProductName from "./components/ProductName.tsx";
import ProductDateAndFavoriteButton from "./components/ProductDateAndFavoriteButton.tsx";
import {useNavigateWithScrollBehavior} from "../../utils/hooks/useNavigateWithScrollBehavior.ts";
import ProductPrice from "./components/ProductPrice.tsx";
import noImage from "../../assets/jpg/no-image.jpg"


type Props = {
    className: string,
    size: "sm" | "md" | "lg" | "xl",
    product: ProductItemProps
}

export default function ProductItem({ className, size, product }: Props) {
    const navigate = useNavigateWithScrollBehavior(`/products/${product.id}`, "smooth");

    return (
        <ProductItemLayout>
            <button className={className} onClick={navigate} >
                <ProductImage image={noImage} />
                <ProductName size={size} name={product.name} />
                <ProductPrice size={size} price={product.price} />
            </button>
            {size === "sm" ? null : <ProductDateAndFavoriteButton date={product.date} /> }
        </ProductItemLayout>
    );
};