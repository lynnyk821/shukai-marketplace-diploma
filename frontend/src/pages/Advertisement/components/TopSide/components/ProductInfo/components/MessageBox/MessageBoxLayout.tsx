import {MyContainerProps} from "../../../../../../../../types/help/my-container-props.ts";

export default function MessageBoxLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex "}>
            {children}
        </div>
    );
};