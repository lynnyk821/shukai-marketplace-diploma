import {MyContainerProps} from "../../../types/help/my-container-props.ts";

export default function DropdownListItemsLayout({children}: MyContainerProps) {
    return (
        <ul className={
            "absolute w-full h-fit mt-2 rounded-l-xl overflow-auto z-10 " +
            "border-[1px] border-solid border-gray-300 bg-white "
        }>
            {children}
        </ul>
    );
};