import {Icon} from "@iconify/react";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";
import {MyButtonProps} from "../../../../../types/my-button-props.ts";

export default function MessageButton({onClick}: MyButtonProps) {
    return (
        <TiltShake>
            <button
                className={"h-full w-7 centered relative text-[#414141] hover:text-yellow-600"}
                onClick={onClick}
            >
                <span className={"w-2 h-2 right-[3.1px] top-[1px] absolute bg-yellow-600 rounded-full duration-200 ease-in-out"}/>
                <Icon icon="solar:letter-unread-linear" width="24" height="24"/>
            </button>
        </TiltShake>
    );
};