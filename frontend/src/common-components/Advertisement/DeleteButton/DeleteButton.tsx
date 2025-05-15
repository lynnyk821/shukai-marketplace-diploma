import {MyContainerProps} from "../../../types/help/my-container-props.ts";
import {MyButtonProps} from "../../../types/help/my-button-props.ts";

type Props = MyContainerProps & MyButtonProps

export default function DeleteButton({children, onClick}: Props) {
    return (
        <button
            className={"h-full px-2.5 centered rounded-lg border-[#414141] " +
                "border border-opacity-50 text-[#414141] font-monserrat font-medium " +
                "hover:text-red-500 hover:border-red-500 duration-200 ease-in-out"}
            onClick={onClick}
        >
            {children}
        </button>
    );
};