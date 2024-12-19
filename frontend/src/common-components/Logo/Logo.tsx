import {LOGO_NAME} from "../../globals-env.ts";
import {useNavigateWithScrollBehavior} from "../../utils/hooks/useNavigateWithScrollBehavior.ts";

export function Logo() {
    const navigate = useNavigateWithScrollBehavior("/", "smooth");

    return (
        <button
            className={
                "h-10 font-poppins text-4xl font-bold centered " +
                "text-[#383838] text-opacity-90 inline-block " +
                "hover:text-yellow-600 transition duration-200 ease-in-out"
            }
            style={{ userSelect: "none" }}
            onClick={navigate}
        >
            {LOGO_NAME}
        </button>
    );
};