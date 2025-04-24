import {MyContainerProps} from "../../types/help/my-container-props.ts";

type Props = MyContainerProps & {
    isFixed?: boolean;
}

export function HeaderLayout({isFixed, children}: Props) {
    const grayBg = `h-24 w-screen ${!isFixed && "fixed"} centered shrink-0 bg-[#eee] z-40`
    /*const whiteBg = `h-24 w-screen ${!isFixed && "fixed"} centered shrink-0 border-b border-[#414141] border-opacity-30  z-40`*/

    return (
        <header className={grayBg}>
            <div className={"h-11 w-full max-w-container flex items-center gap-9"}>
                {children}
            </div>
        </header>
    );
}