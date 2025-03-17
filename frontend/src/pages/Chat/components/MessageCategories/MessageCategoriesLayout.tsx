import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function MessageCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-[4.5rem] grid grid-cols-3"}>{children}</div>
    );
};