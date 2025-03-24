import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function TopSideLayout({children}: MyContainerProps) {
    return (
        <div className={"h-fit"}>
            <div className={"w-full h-[44rem] flex gap-10 mb-10"}>
                {children}
            </div>
        </div>
    );
};