import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export default function MessageInputField() {
    const textareaRef = useRef<any>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    };

    useEffect(() => {
        handleInput();
    }, []);

    return (
        <ul
            className={
                "w-full h-fit flex items-center gap-3 " +
                "border-t-[1px] border-[#414141] border-opacity-10"
            }
        >
            <li className={"w-8 h-full centered text-[#414141]"}>
                <button
                    className={"w-fit text-[#414141] hover:text-yellow-600 transition duration-300 ease-in-out"}
                >
                    <Icon icon="lets-icons:img-box-light" width="32" height="32" />
                </button>
            </li>
            <li className={"h-full w-full py-3 flex-1 relative flex items-center"}>
                <textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    className={
                        "w-full max-h-32 p-3 rounded-lg bg-[#eee] bg-opacity-75 outline-none overflow-hidden resize-none " +
                        "text-[#414141] font-inter " +
                        "border-[1px] border-[#41414] border-opacity-15 " +
                        "hover:border-yellow-600 focus:border-yellow-600 " +
                        "transition duration-200 ease-in-out " +
                        "placeholder:text-[#414141] placeholder:text-opacity-50 placeholder:font-monserrat"
                    }
                    placeholder={"Напишіть повідомлення..."}
                    style={{overflowY: "auto"}}
                />
                <button className={
                    "w-7 h-7 centered absolute bottom-5 right-3.5 " +
                    "text-[#414141] text-opacity-45 hover:text-yellow-600 transition duration-300 ease-in-out"}
                >
                    <Icon icon="mynaui:send-solid" width="22" height="22" />
                </button>
            </li>
        </ul>
    );
}