import {MyContainerProps} from "../../../../../../../../types/my-container-props.ts";

export default function DateInfoLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full text-left mb-2"}>
            {children}
        </div>
    );
};