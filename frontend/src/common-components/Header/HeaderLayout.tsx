import {ChildComp} from "../../types/child-comp.ts";

export function HeaderLayout({children}: ChildComp) {
    return (
        <header className={"h-44 w-screen flex flex-col items-center justify-center"}>
            {children}
        </header>
    );
};