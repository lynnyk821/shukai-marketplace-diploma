import {ProductItemProps} from "../common/product-item-props.ts";

export type HomeResponse = {
    newAdvertisements: ProductItemProps[],
    clothesAdvertisements: ProductItemProps[],
    autoGoodAdvertisements: ProductItemProps[],
    electronicAdvertisements: ProductItemProps[],
}

export type GetHomeListItem = {
    id: number,
    name: string,
    price: number,
    image: string,
    createdAt: number,
}