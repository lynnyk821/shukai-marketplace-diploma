import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function ProductInfoLayout({children}: MyContainerProps) {
    return (
        <div className={"w-[30%] h-[40rem] flex flex-col gap-2"}>{children}</div>
    );
};