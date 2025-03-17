import {RegionProps} from "../common/advertisement/region-props.ts";
import {UserProps} from "../common/advertisement/user-props.ts";
import {CategoryProps} from "../common/advertisement/category-props.ts";

export type Advertisement = {
    id: number,
    name: string,
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