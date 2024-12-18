import {HomeProductItemProps} from "../../../../../types/home-product-item-props.ts";
import HomeProductName from "../../../../../common-components/HomeProductComponents/HomeProductName.tsx";
import HomeProductImage from "../../../../../common-components/HomeProductComponents/HomeProductImage.tsx";
import {useNavigate} from "react-router-dom";

export default function RecentlyWatchedItem({ id, name, image }: HomeProductItemProps) {
    const navigate = useNavigate();

    return (
        <button
            className={"w-full h-64"}
            onClick={() => navigate(`/products/${id}`)}
        >
            <HomeProductImage size={"sm"} image={image} />
            <HomeProductName size="sm" name={name} />
        </button>
    );
};