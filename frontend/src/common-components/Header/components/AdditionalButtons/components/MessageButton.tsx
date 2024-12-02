import {Icon} from "@iconify/react";

type Props = {
    onClick?: () => void;
};

export default function MessageButton({onClick}: Props) {

    return (
        <button
            className={"h-full w-7 centered relative text-[#414141] hover:text-yellow-600"}
            onClick={onClick}
        >
            <div className={"w-2 h-2 right-[3.2px] top-[8.8px] absolute bg-yellow-600 rounded-full duration-200 ease-in-out"}/>
            <Icon icon="solar:letter-unread-linear" width="24" height="24"/>
        </button>
    );
};