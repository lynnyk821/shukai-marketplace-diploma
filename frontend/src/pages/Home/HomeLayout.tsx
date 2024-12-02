import {ChildComp} from "../../types/child-comp.ts";

export function HomeLayout({children} : ChildComp) {
    return (
        <div className={"h-screen flex flex-col items-center"}>
            {children}
        </div>
    );
};