import {Icon} from "@iconify/react";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";
import {MyButtonProps} from "../../../../../types/my-button-props.ts";

export default function CartButton({onClick}: MyButtonProps) {
    return (
        <TiltShake>
            <button
                className={"relative h-full w-7 centered text-sm font-inter text-[#414141] hover:text-yellow-600"}
                onClick={onClick}
                style={{ userSelect: "none" }}
            >
                <span className={"absolute top-1 left-8 text-sm font-medium rounded-full"}>1</span>
                <Icon icon="heroicons:shopping-bag" width="24" height="24"/>
            </button>
        </TiltShake>
    );
};