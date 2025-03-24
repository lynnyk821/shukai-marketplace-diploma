import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function ProductInfoLayout({children}: MyContainerProps) {
    return (
        <div className={"w-2/5 flex flex-col"}>{children}</div>
    );
};