import CartListLayout from "./CartListLayout.tsx";
import {OrderItem} from "../../../../types/common/order-item.ts";
import CartItem from "../CartItem/CartItem.tsx";

type Props = {
    items: OrderItem[];
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