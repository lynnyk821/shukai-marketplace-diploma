import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function TitleWithLinksLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit flex flex-col gap-1"}>{children}</div>
    );
};