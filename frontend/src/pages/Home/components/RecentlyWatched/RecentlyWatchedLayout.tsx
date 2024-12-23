import {MyContainerProps} from "../../../../types/my-container-props.ts";
import {Title} from "../../../../common-components/Title/Title.tsx";

export default function RecentlyWatchedLayout({children}: MyContainerProps) {
    return (
        <div className={"flex flex-col"}>
            <Title text={"Недавно переглянуті"} />
            <ul className={"w-full grid gap-x-4 grid-cols-6"}>{children}</ul>
        </div>
    );
};