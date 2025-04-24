import {MyContainerProps} from "../../../types/help/my-container-props.ts";
import {MyButtonProps} from "../../../types/help/my-button-props.ts";

type Props = MyContainerProps & MyButtonProps & {

};

export default function CartOrderButton({children, onClick}: Props) {
    return (
        <button className={
            "h-full px-2.5 gap-4 centered rounded-lg " +
            "text-white font-bold font-inter bg-black " +
            "hover:bg-gray-700 transition duration-300 ease-in-out "
        }
                style={{ userSelect: "none" }}
                onClick={onClick}
        >
            {children}
        </button>
    );
};