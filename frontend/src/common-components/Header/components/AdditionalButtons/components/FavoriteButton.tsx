import {Icon} from "@iconify/react";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";
import {MyButtonProps} from "../../../../../types/help/my-button-props.ts";

export default function FavoriteButton({onClick}: MyButtonProps) {
    return (
        <TiltShake>
            <button
                className={"h-full w-7 centered text-[#414141] hover:text-yellow-600"}
                onClick={onClick}
            >
                <Icon className={"text-[#ca8a04]"} icon="line-md:heart-filled" width="24" height="24" />
                {/*<Icon icon="proicons:heart" width="24" height="24" />*/}
            </button>
        </TiltShake>
    );
};