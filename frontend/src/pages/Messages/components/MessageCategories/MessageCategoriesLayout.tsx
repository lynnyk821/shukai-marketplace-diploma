import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function MessageCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit grid grid-cols-3"}>{children}</div>
    );
};