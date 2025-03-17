import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";
import {MyButtonProps} from "../../../../../../types/common/my-button-props.ts";

export default function PriceButton({children, onClick}: MyContainerProps & MyButtonProps) {
    return (
        <button className={
            "flex-1 h-full gap-4 centered rounded-lg " +
            "border border-solid border-[#414141] border-opacity-30 " +
            "text-sm font-monserrat font-medium relative text-[#414141] " +
            "hover:text-yellow-600 duration-200 ease-in-out "
        }
                onClick={onClick}
                style={{ userSelect: "none" }}
        >
            {children}
        </button>
    );
};