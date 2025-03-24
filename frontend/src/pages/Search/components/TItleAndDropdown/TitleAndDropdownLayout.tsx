import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function TitleAndDropdownLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex items-center pb-6"}>
            <div className={"w-full h-10 flex"}>
                {children}
            </div>
        </div>
    );
};