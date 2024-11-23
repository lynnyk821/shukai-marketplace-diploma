import {ChildComp} from "../../../../types/child-comp.ts";

export default function TopSideLayout({children}: ChildComp) {
    return (
        <div className={"h-1/2 w-full centered-container bg-[#eee]"}>
            <div className={"h-full flex container-width"}>
                {children}
            </div>
        </div>
    );
};