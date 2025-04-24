import ProductItemLayout from "./ProductItemLayout.tsx";
import ProductImage from "./components/ProductImage.tsx";
import ProductName from "./components/ProductName.tsx";
import FavoriteButton from "./components/FavoriteButton.tsx";
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
    const navigate = useNavigateWithScrollBehavior(`/advertisement/${product.id}`, "smooth");

    const handleImage = (image: string) => {
        return image ? image : noImage;
    }

    return (
        <ProductItemLayout className={className}>
            <button
                className={"h-5/6 flex flex-col gap-2 hover:text-yellow-600 transition duration-200 ease-in-out text-[#414141] ${className}"}
                onClick={navigate}
            >
                <ProductImage
                    image={handleImage(product.image)}
                    size={size}
                />
                <ProductName
                    size={size}
                    name={product.name}
                />
            </button>
            <div className={"w-full h-1/6 flex items-center "}>
                <ProductPrice size={size} price={product.price}/>
                {size !== "sm" && <FavoriteButton />}
            </div>
        </ProductItemLayout>
    );
};