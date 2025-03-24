import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function NewProductCategoryLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit flex flex-col gap-3 mb-2"}>{children}</div>
    );
};