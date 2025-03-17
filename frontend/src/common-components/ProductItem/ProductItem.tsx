import ProductItemLayout from "./ProductItemLayout.tsx";
import ProductImage from "./components/ProductImage.tsx";
import ProductName from "./components/ProductName.tsx";
import ProductDateAndFavoriteButton from "./components/ProductDateAndFavoriteButton.tsx";
import {useNavigateWithScrollBehavior} from "../../utils/hooks/useNavigateWithScrollBehavior.ts";
import ProductPrice from "./components/ProductPrice.tsx";
import noImage from "../../assets/jpg/no-image.jpg"
import {ProductItemProps} from "../../types/common/product-item-props.ts";

type Props = {
    className: string,
    size: "sm" | "md" | "lg" | "xl",
    product: ProductItemProps,
}

export default function ProductItem({ className, size, product }: Props) {
    const navigate = useNavigateWithScrollBehavior(`/products/${product.id}`, "smooth");

    const handleImage = (image: string) => {
        return image ? image : noImage;
    }

    return (
        <ProductItemLayout>
            <button
                className={`text-[#414141] hover:text-yellow-600 transition duration-200 ease-in-out ${className}`}
                onClick={navigate}
            >
                <ProductImage image={handleImage(product.image)} />
                <ProductName size={size} name={product.name} />
                <ProductPrice size={size} price={product.price} />
            </button>
            {size === "sm" ? null : <ProductDateAndFavoriteButton date={product.date} /> }
        </ProductItemLayout>
    );
};