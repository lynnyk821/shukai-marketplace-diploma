import {MyContainerProps} from "../../types/help/my-container-props.ts";

export default function SidebarNavigationLayout({children}: MyContainerProps) {
    return (
        <div className={"w-1/4 flex flex-col gap-1 pr-10"}>
            {children}
        </div>
    );
};