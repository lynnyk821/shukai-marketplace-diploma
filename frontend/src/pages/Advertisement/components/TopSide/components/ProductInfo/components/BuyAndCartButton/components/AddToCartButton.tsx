import {useCart} from "../../../../../../../../../utils/hooks/useCart.ts";
import {AdvertisementProps} from "../../../../../../../../../types/common/advertisement-props.ts";
import {OrderItem} from "../../../../../../../../../types/common/order-item.ts";

type Props = {
    advertisement: AdvertisementProps;
}

export default function AddToCartButton({ advertisement }: Props) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const orderItem: OrderItem = {
            advertisement: {
                id: advertisement.id,
                image: advertisement.images[0],
                price: advertisement.price,
                title: advertisement.title,
                seller: advertisement.user.name,
            },
            paymentMethods: advertisement.paymentMethods,
        };
        addToCart(orderItem);
    };

    return (
        <button
            className={
                "w-2/5 text-sm text-[#414141] border border-solid border-[#414141] rounded-lg " +
                "hover:border-yellow-600 hover:text-yellow-600 transition duration-300 ease-in-out " +
                "font-inter"}
            onClick={handleAddToCart}
        >
            В кошик
        </button>
    );
};