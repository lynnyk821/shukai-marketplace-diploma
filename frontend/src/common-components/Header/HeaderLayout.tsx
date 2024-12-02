import {ChildComp} from "../../types/child-comp.ts";

export function HeaderLayout({children}: ChildComp) {
    return (
        <header className={"h-24 w-full centered bg-[#eee]"}>
            <div className={"h-10 flex main-container gap-9"}>
                {children}
            </div>
        </header>
    );
}