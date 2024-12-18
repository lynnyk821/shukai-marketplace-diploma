import {MyButtonProps} from "../../../../../../../../../types/my-button-props.ts";
import {Icon} from "@iconify/react";

export default function AddToFavoriteButton({onClick}: MyButtonProps) {
    return (
        <button
            className={"text-[#414141] hover:text-yellow-600 transition duration-300 flex items-center gap-2"}
            onClick={onClick}
        >
            <Icon icon="bx:heart" width="24" height="24" />
            <p className={"text-sm font-monserrat font-medium"}>В обране</p>
        </button>
    );
};