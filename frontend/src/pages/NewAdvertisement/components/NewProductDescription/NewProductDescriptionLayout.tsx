import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function NewProductDescriptionLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit flex flex-col gap-2 mb-8    "}>
            {children}
        </div>
    );
};