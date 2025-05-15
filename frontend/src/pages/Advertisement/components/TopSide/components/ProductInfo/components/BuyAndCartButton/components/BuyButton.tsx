import {useNavigate} from "react-router-dom";
import {AdvertisementProps} from "../../../../../../../../../types/common/advertisement-props.ts";
import {OrderItem} from "../../../../../../../../../types/common/order-item.ts";
import {useUserStore} from "../../../../../../../../../utils/store/useUserStore.ts";

type Props = {
    advertisement: AdvertisementProps,
}

export default function BuyButton({advertisement}: Props) {
    const navigate = useNavigate();
    const {user} = useUserStore();

    const handleClick = (): void => {
        console.log(user?.id);
        if(user?.id) {
            navigate("/order", {
                state: {
                    item: {
                        advertisement: {
                            id: advertisement.id,
                            image: advertisement.images[0],
                            price: advertisement.price,
                            title: advertisement.title,
                            seller: advertisement.user.name,
                        },
                        paymentMethods: advertisement.paymentMethods,
                    } as OrderItem,
                }
            });
        }
    };

    return (
        <button
            className={
                "w-3/5 bg-black text-sm text-white font-bold rounded-lg p-3 " +
                "hover:bg-gray-700 transition duration-300 ease-in-out " +
                "font-monserrat"}
            onClick={handleClick}
        >
            Купити
        </button>
    );
};
