import {RegionProps} from "./region-props.ts";
import {UserProps} from "./user-props.ts";
import {CategoryProps} from "./category-props.ts";

export type AdvertisementProps = {
    id: number,
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