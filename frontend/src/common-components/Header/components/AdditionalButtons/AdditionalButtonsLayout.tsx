import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function AdditionalButtonsLayout({children}: MyContainerProps) {
    return (
        <div className={"gap-4 flex justify-end items-center"}>
            {children}
        </div>
    );
};