import {Icon} from "@iconify/react";
import {MyButtonProps} from "../../../../types/my-button-props.ts";
import {useAppStore} from "../../../../utils/state-management/useAppStore.ts";

export default function CatalogButton({onClick}: MyButtonProps) {
    const {isCatalogOpen} = useAppStore();

    return (
        <button
            className={
                `h-full px-2.5 gap-4 centered text-[#414141] font-inter border-[#414141] border-[1px] rounded-lg
                 hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out`
            }
            onClick={onClick}
            style={{ userSelect: "none" }}
        >
            {isCatalogOpen
                ? <Icon icon="lets-icons:close-round" width="24" height="24" />
                : <Icon icon="ic:round-menu" width="24" height="24"/>
            }
            Каталог
        </button>
    );
};