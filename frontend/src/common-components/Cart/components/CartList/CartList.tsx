import CartListLayout from "./CartListLayout.tsx";
import {CartItemProps} from "../../../../types/common/cart-item-props.ts";
import CartItem from "../CartItem/CartItem.tsx";

type Props = {
    items: CartItemProps[];
}

export default function CartList({items}: Props) {
    return (
        <CartListLayout>
            {items.map((item) => (
                <CartItem item={item} />
            ))}
        </CartListLayout>
    );
};