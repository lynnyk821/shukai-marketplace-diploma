import {MyContainerProps} from "../../../../../../../../types/help/my-container-props.ts";
import {MyButtonProps} from "../../../../../../../../types/help/my-button-props.ts";

type Props = MyContainerProps & MyButtonProps & {

}

export default function AddToFavoriteButtonLayout({children, onClick}: Props) {
    return (
        <button
            className={
                "w-fit text-[#414141] font-monserrat flex items-center gap-2 " +
                "hover:text-yellow-600 transition duration-300 "
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};