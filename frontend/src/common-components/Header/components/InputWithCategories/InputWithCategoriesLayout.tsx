import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function InputWithCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"flex justify-center items-center"}>{children}</div>
    );
};