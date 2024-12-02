import {Icon} from "@iconify/react";

type Props = {
    onClick?: () => void;
};

export default function CartButton({onClick}: Props) {
    return (
        <button
            className={"h-full w-7 centered text-[#414141] hover:text-yellow-600"}
            onClick={onClick}
        >
            <Icon icon="heroicons:shopping-bag" width="24" height="24" />
        </button>
    );
};