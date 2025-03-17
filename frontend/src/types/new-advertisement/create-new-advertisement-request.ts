import {RegionProps} from "../common/advertisement/region-props.ts";

export type CreateNewAdvertisementRequest = {
    name: string,
    price: number,
    description: string,
    region: RegionProps,
    photos: Array<string>,
    userId: number,
    category: string,
    deliveryMethods: Array<number>,
    paymentMethods: Array<number>,
}