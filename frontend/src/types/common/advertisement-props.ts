import {UserProps} from "./user-props.ts";
import {CategoryProps} from "./category-props.ts";
import {RegionProps} from "../../common-components/Advertisement/Region/types/region-props.ts";

export type AdvertisementProps = {
    id: string,
    title: string,
    createdAt: Date,
    price: number,
    description: string,
    favoritesCount: number,
    images: string[],
    region: RegionProps,
    user: UserProps,
    category: CategoryProps,
    deliveryMethods: Array<string>,
    paymentMethods: Array<string>,
}