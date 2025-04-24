import {MyContainerProps} from "../../../../types/help/my-container-props.ts";
import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

export default function RecentlyWatchedLayout({children}: MyContainerProps) {
    return (
        <div className={"flex flex-col"}>
            <div className={"w-full h-fit pb-6"}>
                <CommonTitle text={"Недавно переглянуті"} size={"xl"} />
            </div>
            <ul className={"w-full grid gap-x-4 grid-cols-6"}>{children}</ul>
        </div>
    );
};