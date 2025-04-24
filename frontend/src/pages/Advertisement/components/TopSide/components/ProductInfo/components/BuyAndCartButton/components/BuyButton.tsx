import {MyButtonProps} from "../../../../../../../../../types/help/my-button-props.ts";

export default function BuyButton({onClick}: MyButtonProps) {
    return (
        <button
            className={
                "w-3/5 bg-black text-sm text-white font-bold rounded-lg p-3 " +
                "hover:bg-gray-700 transition duration-300 ease-in-out " +
                "font-monserrat"}
            onClick={onClick}
        >
            Купити
        </button>
    );
};