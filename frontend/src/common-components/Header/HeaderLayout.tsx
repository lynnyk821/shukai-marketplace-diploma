import {MyContainerProps} from "../../types/common/my-container-props.ts";

export function HeaderLayout({children}: MyContainerProps) {
    return (
        <header className={"h-24 w-screen fixed centered shrink-0 bg-[#eee] z-40"}>
            <div className={"h-11 w-full max-w-container flex items-center gap-9"}>
                {children}
            </div>
        </header>
    );
}