import {ProductItemProps} from "../common/product-item-props.ts";

export type GetHomeResponse = {
    newAdvertisements: ProductItemProps[],
    clothesAdvertisements: ProductItemProps[],
    autoGoodAdvertisements: ProductItemProps[],
    electronicAdvertisements: ProductItemProps[],
}