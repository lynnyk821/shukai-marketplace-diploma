import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function CategoriesInputLayout({children}: MyContainerProps) {
    return (
        <div className={"flex justify-center items-center"}>{children}</div>
    );
};