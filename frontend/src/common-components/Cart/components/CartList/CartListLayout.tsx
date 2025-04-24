import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function CartListLayout({children}: MyContainerProps) {
    return (
        <ul className={"h-[90%] text-[#414141] flex flex-col gap-3 overflow-y-auto custom-scroll"}>
            {children}
        </ul>
    );
};