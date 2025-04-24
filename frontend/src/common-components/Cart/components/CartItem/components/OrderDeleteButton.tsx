import {Icon} from "@iconify/react";

type Props = {
    removeFromCart: () => void;
}

export default function OrderDeleteButton({removeFromCart}: Props) {
    return (
        <button
            onClick={removeFromCart}
            className="text-[#41414] ml-3 hover:text-red-600 transition duration-300 ease-in-out"
        >
            <Icon icon="heroicons:trash" width={20} />
        </button>
    );
};