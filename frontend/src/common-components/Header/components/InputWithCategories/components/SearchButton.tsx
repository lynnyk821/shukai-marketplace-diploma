import {Icon} from "@iconify/react";
import {useState} from "react";

export default function SearchButton() {
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

    return (
        <button className="h-full w-1/6 centered"
                onMouseEnter={() => setIsMouseEnter(true)}
                onMouseLeave={() => setIsMouseEnter(false)}
                type="submit"
        >
            <Icon
                className={isMouseEnter ? "text-yellow-600 text-opacity-75" : "text-[#414141] text-opacity-50"}
                icon="hugeicons:search-02" width="23" height="22"
            />
        </button>
    );
};