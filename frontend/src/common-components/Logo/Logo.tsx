import {LOGO_NAME} from "../../globals-env.ts";
import {useNavigateWithScrollBehavior} from "../../utils/hooks/useNavigateWithScrollBehavior.ts";

export function Logo() {
    return (
        <button className={"h-10 w-fit font-poppins text-4xl font-bold centered text-[#383838] text-opacity-90 " +
                           "hover:text-yellow-600 transition duration-200 ease-in-out"}
            style={{ userSelect: "none" }}
            onClick={useNavigateWithScrollBehavior("/", "smooth")}
        >
            {LOGO_NAME}
        </button>
    );
};