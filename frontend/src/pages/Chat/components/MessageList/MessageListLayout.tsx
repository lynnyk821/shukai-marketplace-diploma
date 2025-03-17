import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function MessageListLayout({children}: MyContainerProps) {
    return (
        <div className={"max-h-[39.5rem] flex-1 overflow-y-scroll custom-scroll"}>
            {children}
        </div>
    );
};