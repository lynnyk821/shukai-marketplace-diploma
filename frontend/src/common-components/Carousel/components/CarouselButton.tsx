import {MyContainerProps} from "../../../types/help/my-container-props.ts";
import {MyButtonProps} from "../../../types/help/my-button-props.ts";

type Props = MyContainerProps & MyButtonProps & {
    size: "sm" | "lg"
    side: "left" | "right"
}

export default function CarouselButton({size, children, onClick, side}: Props) {
    return (
        <button
            className={`absolute rounded-full z-10 px-3 py-1 bg-[#eee] top-0 ${
                side === "left" ? "left-0" : "right-0"} ${
                size === "sm" ? "top-12" : "top-24"}
                `}
            onClick={onClick}
        >
            {children}
        </button>
    );
};