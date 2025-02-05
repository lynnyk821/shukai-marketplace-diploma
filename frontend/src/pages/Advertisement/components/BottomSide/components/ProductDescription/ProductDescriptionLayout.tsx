import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function ProductDescriptionLayout({children}: MyContainerProps) {
    return (
        <div className={"w-3/5 flex flex-col gap-5"}>
            {children}
        </div>
    );
};