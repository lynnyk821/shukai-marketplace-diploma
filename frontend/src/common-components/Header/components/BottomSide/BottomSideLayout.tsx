import {ChildComp} from "../../../../types/child-comp.ts";

export default function BottomSideLayout({children}: ChildComp) {
    return (
        <div className={"h-1/2 w-full centered-container border-style-1"}>
            <div className={"h-full container-width bg-amber-50"}>
                {children}
            </div>
        </div>
    );
};