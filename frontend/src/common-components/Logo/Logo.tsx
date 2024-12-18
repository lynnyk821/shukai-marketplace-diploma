import {LOGO_NAME} from "../../globals-env.ts";
import { useNavigate } from "react-router-dom";

export function Logo() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        navigate("/")
    };

    return (
        <button
            className={
                "h-10 font-poppins text-4xl font-bold centered " +
                "text-[#383838] text-opacity-90 inline-block " +
                "hover:text-yellow-600 transition duration-200 ease-in-out"
            }
            style={{ userSelect: "none" }}
            onClick={handleClick}
        >
            {LOGO_NAME}
        </button>
    );
};