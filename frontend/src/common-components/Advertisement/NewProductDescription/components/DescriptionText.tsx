import {UseFormRegister} from "react-hook-form";
import {useEffect, useRef} from "react";
import {AdRequest} from "../../../../types/request/ad-request.ts";

type Props = {
    register: UseFormRegister<AdRequest>,
    error?: string,
};

export default function DescriptionText({ register, error }: Props) {
    const { ref: registerRef, ...rest } = register("description");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const adjustHeight = () => {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 320)}px`;
        };

        adjustHeight();
        textarea.addEventListener("input", adjustHeight);

        return () => {
            textarea.removeEventListener("input", adjustHeight);
        };
    }, []);

    return (
        <div className={"w-full h-fit"}>
            <textarea
                ref={(e) => {
                    registerRef(e);
                    textareaRef.current = e;
                }}
                className={
                    "w-full max-h-80 p-4 rounded-lg outline-none custom-scroll resize-none " +
                    "text-[#414141] font-inter " +
                    "border border-solid border-[#414141] border-opacity-30 " +
                    "hover:border-yellow-600 focus:border-yellow-600 " +
                    "transition duration-300 ease-in-out  " +
                    "placeholder:font-monserrat placeholder:text-sm"
                }
                placeholder={"Напишіть повідомлення..."}
                style={{ overflowY: "auto" }}
                {...rest}
            />
            <div className={"h-4"}>
                {error && <span className="text-red-500 text-sm block">{error}</span>}
            </div>
        </div>
    );
}