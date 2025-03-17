import {MyButtonProps} from "../../../../../../../../../types/common/my-button-props.ts";
import {Icon} from "@iconify/react";

type Props = MyButtonProps & {
    favorites: number
}

export default function AddToFavoriteButton({onClick, favorites}: Props) {
    return (
        <button
            className={"text-[#414141] hover:text-yellow-600 transition duration-300 flex items-center gap-2"}
            onClick={onClick}
        >
            <Icon icon="bx:heart" width="24" height="24" />
            <p className={"text-sm font-monserrat font-medium"}>`${favorites} В обране`</p>
        </button>
    );
};