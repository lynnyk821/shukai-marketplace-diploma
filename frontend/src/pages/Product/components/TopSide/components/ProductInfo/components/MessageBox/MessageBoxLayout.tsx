import {MyContainerProps} from "../../../../../../../../types/my-container-props.ts";

export default function MessageBoxLayout({children}: MyContainerProps) {
    return (
        <div className={"h-full flex flex-col gap-4 mt-5"}>
            {children}
        </div>
    );
};