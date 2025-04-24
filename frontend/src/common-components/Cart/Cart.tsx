import CartLayout from "./CartLayout.tsx";
import {Icon} from "@iconify/react";
import {Dispatch, forwardRef, LegacyRef, SetStateAction} from "react";
import {CommonTitle} from "../Titles/MainTitle/CommonTitle.tsx";
import CartList from "./components/CartList/CartList.tsx";
import {useCart} from "../../utils/hooks/useCart.ts";

type Props = {
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const Cart = forwardRef(({setIsActive} : Props, ref: LegacyRef<HTMLDivElement>)=> {
    const { cart } = useCart();

    return (
        <CartLayout ref={ref}>
            <div className="flex justify-between items-center mb-4">
                <CommonTitle
                    text={"Ваша корзина"}
                    size={"xl"}
                />
                <button
                    onClick={() => setIsActive(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <Icon icon="heroicons:x-mark" width="24" height="24" />
                </button>
            </div>
            <CartList items={cart} />
        </CartLayout>
    );
});

export default Cart;