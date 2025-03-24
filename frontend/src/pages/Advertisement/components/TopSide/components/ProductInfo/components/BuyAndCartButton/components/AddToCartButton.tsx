import {MyButtonProps} from "../../../../../../../../../types/help/my-button-props.ts";

export default function AddToCartButton({onClick}: MyButtonProps) {
    return (
        <button
            className={
                "w-2/5 text-[#41414] border-[1px] border-solid border-[#414141] rounded-lg " +
                "hover:border-yellow-600 hover:text-yellow-600 transition duration-300 ease-in-out " +
                "font-inter"}
            onClick={onClick}
        >
            В кошик
        </button>
    );
};