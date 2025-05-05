import {RegionProps} from "../common/region-props.ts";

export type CreateAdRequest = {
    title: string,
    description: string,
    price: number,
    images: Array<string>,
    region: RegionProps,
    userId: number,
    categoryId: number,
    deliveryMethodIds: Array<number>,
    paymentMethodIds: Array<number>,
}