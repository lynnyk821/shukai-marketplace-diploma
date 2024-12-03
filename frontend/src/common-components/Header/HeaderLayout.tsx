import {MyContainerProps} from "../../types/my-container-props.ts";

export function HeaderLayout({children}: MyContainerProps) {
    return (
        <header className={"h-24 w-full centered shrink-0 bg-[#eee]"}>
            <div className={"max-w-[1200px] h-10 flex gap-9"}>
                {children}
            </div>
        </header>
    );
}