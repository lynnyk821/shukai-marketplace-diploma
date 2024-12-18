import {MyContainerProps} from "../../types/my-container-props.ts";

export function HeaderLayout({children}: MyContainerProps) {
    return (
        <header className={"h-24 w-screen absolute centered shrink-0 bg-[#eee] z-40"}>
            <div className={"w-full max-w-container h-10 flex gap-9"}>
                {children}
            </div>
        </header>
    );
}