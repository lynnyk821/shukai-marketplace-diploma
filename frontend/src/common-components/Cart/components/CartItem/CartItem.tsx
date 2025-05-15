import CartItemLayout from "./CartItemLayout.tsx";
import {OrderItem} from "../../../../types/common/order-item.ts";
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
    item: OrderItem;
}

export default function CartItem({ item }: Props) {
    const [isDeleted, setIsDeleted] = useState(false);
    const { removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleRemoveFromCart = () => {
        setIsDeleted(true);
        removeFromCart(item.advertisement?.id);
    }

    const handleCheckout = () => {
        navigate("/order", {
            state: {
                item: item,
            }
        });
    }

    return (
        <CartItemLayout isHidden={isDeleted}>
            <div className={"w-full h-28 flex gap-4 items-center border-b border-[#414141] border-opacity-25"}>
                <OrderImage image={item.advertisement?.image} />
                <OrderAdName name={item.advertisement?.title} />
                <OrderPrice price={item.advertisement?.price} />
                <OrderDeleteButton removeFromCart={handleRemoveFromCart}/>
            </div>
            <div className={"h-10 text-[13px] flex gap-3 justify-end mt-5 font-inter font-medium"}>
                <ButtonWithoutBackground>Додати інші товари продавця</ButtonWithoutBackground>
                <CartOrderButton onClick={handleCheckout}>
                    Оформити замовлення {item.advertisement?.price}
                </CartOrderButton>
            </div>
        </CartItemLayout>
    );
}
