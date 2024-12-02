import {MyContainerProps} from "../../../../types/my-container-props.ts";

export function Logo({children}: MyContainerProps) {
    return (
        <button
            className={
                "h-full font-poppins text-4xl font-bold centered " +
                "text-[#383838] text-opacity-90 inline-block " +
                "hover:text-yellow-600 transition duration-200 ease-in-out"
            }
            style={{ userSelect: "none" }}
        >
            {children}
        </button>
    );
};