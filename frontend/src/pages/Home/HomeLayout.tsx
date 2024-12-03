import {MyContainerProps} from "../../types/my-container-props.ts";

export function HomeLayout({children} : MyContainerProps) {
    return (
        <div className={"flex-1"}>
            {children}
        </div>
    );
};