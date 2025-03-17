import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";
import {MyButtonProps} from "../../../../../../types/common/my-button-props.ts";

export default function BigPictureLayout({children, onClick}: MyButtonProps & MyContainerProps) {
    return (
        <button
            className={
                "w-1/3 h-full flex flex-col centered gap-2 " +
                "text-[#414141] text-opacity-90 " +
                "hover:text-yellow-600 transition duration-300 ease-in-out " +
                "border border-dashed border-[#414141] border-opacity-35 rounded-lg"
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};