import {ChildComp} from "../../types/child-comp.ts";

export function HomeLayout({children} : ChildComp) {
    return (
        <div className={"w-screen h-screen flex flex-col items-center"}>
            {children}
        </div>
    );
};