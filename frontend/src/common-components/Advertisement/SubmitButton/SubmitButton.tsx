import {MyContainerProps} from "../../../types/help/my-container-props.ts";
import {MyButtonProps} from "../../../types/help/my-button-props.ts";

type Props = MyContainerProps & MyButtonProps & {
    type?: "submit" | "button" | "reset",
}

export default function SubmitButton({ type, children, onClick }: Props) {
    return (
        <button className={
            "h-full px-2.5 centered rounded-lg " +
            "border-[#414141] border border-opacity-50 text-[#414141] font-monserrat font-medium " +
            "hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out"
        }
                type={type}
                style={{ userSelect: "none" }}
                onClick={onClick}
        >
            {children}
        </button>

    );
};