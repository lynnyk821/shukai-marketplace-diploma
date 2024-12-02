import {MyContainerProps} from "../../types/my-container-props.ts";

export function HomeLayout({children} : MyContainerProps) {
    return (
        <div className={"h-screen flex flex-col items-center"}>
            {children}
        </div>
    );
};