import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function MessageContainerLayout({children}: MyContainerProps) {
    return (
        <div className={"w-2/3 max-h-[49.6rem] flex flex-col rounded-md"}>
            {children}
        </div>
    );
};