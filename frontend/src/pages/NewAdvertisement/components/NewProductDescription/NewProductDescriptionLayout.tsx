import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function NewProductDescriptionLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit flex flex-col gap-3 mb-6"}>
            {children}
        </div>
    );
};