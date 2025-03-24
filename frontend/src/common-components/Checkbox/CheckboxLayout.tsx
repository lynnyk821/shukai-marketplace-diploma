import {MyContainerProps} from "../../types/help/my-container-props.ts";

export default function CheckboxLayout({children}: MyContainerProps) {
    return (
        <label className={
            `w-full h-9 flex items-center gap-3 cursor-pointer 
            hover:bg-[#eee] hover:bg-opacity-55 transition duration-200 ease-in-out`
        }>
            {children}
        </label>
    );
};