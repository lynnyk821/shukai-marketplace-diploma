import {useState} from "react";

type Props = {
    placeholder: string,
}

export default function MessageBox({placeholder}: Props) {
    const [value, setValue] = useState("");

    return (
        <textarea
            className={
                "w-full h-20 flex p-3 rounded-md resize-none overflow-auto focus:outline-none " +
                "border border-[#414141] border-opacity-30 " +
                "font-inter font-medium text-[#414141] text-sm " +
                "hover:border-yellow-600 transition duration-200 ease-in-out custom-scroll"
            }
            placeholder={placeholder || "Напишіть повідомлення..."}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};