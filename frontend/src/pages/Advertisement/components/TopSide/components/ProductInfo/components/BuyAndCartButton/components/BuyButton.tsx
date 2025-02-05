import {MyButtonProps} from "../../../../../../../../../types/my-button-props.ts";

export default function BuyButton({onClick}: MyButtonProps) {
    return (
        <button
            className={
                "w-3/5 bg-yellow-600 text-[16px] text-white font-bold rounded-lg p-3 " +
                "hover:bg-yellow-500 transition duration-300 ease-in-out " +
                "font-inter"}
            onClick={onClick}
        >
            Купити
        </button>
    );
};