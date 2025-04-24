import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function ProductDescriptionLayout({children}: MyContainerProps) {
    return (
        <div className={"w-3/4 flex flex-col gap-5"}>
            {children}
        </div>
    );
};