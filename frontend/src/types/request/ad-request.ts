import {RegionProps} from "../../common-components/Advertisement/Region/types/region-props.ts";

export type AdRequest = {
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