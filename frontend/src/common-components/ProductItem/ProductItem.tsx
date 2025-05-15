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
    newPath?: string,
    isMyProduct?: boolean,
}

export default function ProductItem({ className, size, product, newPath, isMyProduct }: Props) {
    const path = newPath ? newPath : `/advertisement/${product.id}`
    const navigate = useNavigateWithScrollBehavior(path, "smooth");

    const handleImage = (image: string) => {
        return image ? image : noImage;
    }

    return (
        <ProductItemLayout>
            <button
                className={`h-5/6 flex flex-col ${className} gap-2 text-[#414141]
                ${!isMyProduct && "hover:text-yellow-600 transition duration-200 ease-in-out"}`}
                onClick={navigate}
            >
                {isMyProduct &&
                    <div className={
                        "absolute inset-0 bg-[#414141] bg-opacity-25 opacity-0 " +
                        "group-hover:opacity-100 transition duration-300 rounded-lg z-20"}
                    >
                        <p className={"w-full h-full centered text-lg font-inter text-white font-bold"}>Редагувати</p>
                    </div>
                }
                <ProductImage image={handleImage(product.image)} size={size} />
                <ProductName size={size} name={product.title} />
            </button>
            <div className={"w-full h-1/6 flex items-center "}>
                <ProductPrice size={size} price={product.price}/>
                {(size !== "sm" && !isMyProduct) && <FavoriteButton /> }
            </div>
        </ProductItemLayout>
    );
};