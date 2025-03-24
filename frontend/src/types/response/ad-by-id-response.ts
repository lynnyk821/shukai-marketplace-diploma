import {AdvertisementProps} from "../common/advertisement-props.ts";
import {ProductItemProps} from "../common/product-item-props.ts";

export type AdByIdResponse = {
    advertisement: AdvertisementProps,
    moreAdvertisements: ProductItemProps[],
}