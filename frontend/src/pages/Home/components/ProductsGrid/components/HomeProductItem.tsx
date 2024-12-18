import {HomeProductItemProps} from "../../../../../types/home-product-item-props.ts";
import HomeProductImage from "../../../../../common-components/HomeProductComponents/HomeProductImage.tsx";
import HomeProductName from "../../../../../common-components/HomeProductComponents/HomeProductName.tsx";
import HomeProductPrice from "../../../../../common-components/HomeProductComponents/HomeProductPrice.tsx";
import HomeProductDateInfo from "../../../../../common-components/HomeProductComponents/HomeProductDateInfo.tsx";
import HomeProductItemLayout from "./HomeProductItemLayout.tsx";

export default function HomeProductItem({ id, image, name, date, price }: HomeProductItemProps) {
    return (
        <HomeProductItemLayout id={id}>
            <HomeProductImage size={"lg"} image={image} />
            <HomeProductName size={"lg"} name={name} />
            <HomeProductPrice price={price} />
            <HomeProductDateInfo date={date} />
        </HomeProductItemLayout>
    );
};