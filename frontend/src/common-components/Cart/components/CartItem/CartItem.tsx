import CartItemLayout from "./CartItemLayout.tsx";
import {CartItemProps} from "../../../../types/common/cart-item-props.ts";
import OrderImage from "./components/OrderImage.tsx";
import OrderDeleteButton from "./components/OrderDeleteButton.tsx";
import {useState} from "react";
import {useCart} from "../../../../utils/hooks/useCart.ts";
import OrderAdName from "./components/OrderAdName.tsx";
import OrderPrice from "./components/OrdePrice.tsx";
import ButtonWithoutBackground from "../../../Buttons/ButtonWithoutBackground/ButtonWithoutBackground.tsx";
import CartOrderButton from "../../../Buttons/CartOrderButton/CartOrderButton.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    item: CartItemProps;
}

export default function CartItem({ item }: Props) {
    const [isDeleted, setIsDeleted] = useState(false);
    const { removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleRemoveFromCart = () => {
        setIsDeleted(true);
        removeFromCart(item.id);
    }

    const handleCheckout = () => {
        // Передаем весь объект товара через state
        navigate("/order", {
            state: {
                item: item as CartItemProps,
            }
        });
    }

    return (
        <CartItemLayout isHidden={isDeleted}>
            <div className={"w-full h-28 flex gap-4 items-center border-b border-[#414141] border-opacity-25"}>
                <OrderImage image={item.image} />
                <OrderAdName name={item.name} />
                <OrderPrice
                    id={item.id}
                    price={item.price}
                    quantity={item.quantity}
                />
                <OrderDeleteButton removeFromCart={handleRemoveFromCart}/>
            </div>
            <div className={"h-10 text-[13px] flex gap-3 justify-end mt-5 font-inter font-medium"}>
                <ButtonWithoutBackground>
                    Додати інші товари продавця
                </ButtonWithoutBackground>
                <CartOrderButton onClick={handleCheckout}>
                    Оформити замовлення {item.price}
                </CartOrderButton>
            </div>
        </CartItemLayout>
    );
}
