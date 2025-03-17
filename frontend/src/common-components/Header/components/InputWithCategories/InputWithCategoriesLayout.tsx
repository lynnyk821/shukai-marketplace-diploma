import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function InputWithCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"h-full flex flex-1 justify-center items-center"}>{children}</div>
    );
};