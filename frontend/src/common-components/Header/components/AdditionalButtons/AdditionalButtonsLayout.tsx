import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function AdditionalButtonsLayout({children}: MyContainerProps) {
    return (
        <div className={"gap-3 flex-1 flex justify-end items-center"}>
            {children}
        </div>
    );
};