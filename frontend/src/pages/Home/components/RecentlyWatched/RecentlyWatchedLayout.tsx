import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function RecentlyWatchedLayout({children}: MyContainerProps) {
    return (
        <div className={"flex flex-col"}>
            <p className={"my-10 rounded-lg flex items-center text-lg font-monserrat font-medium"}>Недавно переглянуті</p>
            <ul className={"w-full grid gap-x-4 grid-cols-6"}>{children}</ul>
        </div>
    );
};