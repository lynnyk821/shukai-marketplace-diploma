import {LOGO_NAME} from "../../globals-env.ts";

export function Logo() {
    return (
        <button
            className={
                "h-10 font-poppins text-4xl font-bold centered " +
                "text-[#383838] text-opacity-90 inline-block " +
                "hover:text-yellow-600 transition duration-200 ease-in-out"
            }
            style={{ userSelect: "none" }}
        >
            {LOGO_NAME}
        </button>
    );
};