import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function MessageListLayout({children}: MyContainerProps) {
    return (
        <div className={"flex-1 overflow-y-scroll custom-scroll"}>
            {children}
        </div>
    );
};