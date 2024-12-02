import {Icon} from "@iconify/react";

type Props = {
    onClick?: () => void;
}

export default function CatalogButton({onClick}: Props) {
    return (
        <button
            className={
                `h-full px-2.5 gap-4 centered text-[#414141] font-inter border-[#414141] border-[1px] rounded-lg
                 hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out`
            }
            onClick={onClick}
        >
            <Icon icon="ic:round-menu" width="24" height="24"/>
            Каталог
        </button>
    );
};