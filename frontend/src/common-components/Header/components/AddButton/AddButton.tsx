import {MyButtonProps} from "../../../../types/my-button-props.ts";

export default function AddButton({onClick}: MyButtonProps) {
    return (
        <button
            className={
                `px-2.5 centered text-[#414141] font-inter border-[#414141] border-[1px] rounded-lg
                 hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out`
            }
            onClick={onClick}
            style={{ userSelect: "none" }}
        >
            Додати товар
        </button>
    );
};