import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function MessageContainerLayout({children}: MyContainerProps) {
    return (
        <div className={"w-2/3 flex flex-col rounded-md"}>
            {children}
        </div>
    );
};