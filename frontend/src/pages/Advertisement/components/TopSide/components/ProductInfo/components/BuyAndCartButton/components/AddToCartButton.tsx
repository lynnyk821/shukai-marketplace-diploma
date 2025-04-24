import {useCart} from "../../../../../../../../../utils/hooks/useCart.ts";
import {AdvertisementProps} from "../../../../../../../../../types/common/advertisement-props.ts";
import {CartItemProps} from "../../../../../../../../../types/common/cart-item-props.ts";

type Props = {
    advertisement: AdvertisementProps;
}

export default function AddToCartButton({ advertisement }: Props) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const data: CartItemProps = {
            id: advertisement.id,
            name: advertisement.name,
            price: advertisement.price,
            image: advertisement.images[0],
            quantity: 1
        }

        addToCart(data);
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