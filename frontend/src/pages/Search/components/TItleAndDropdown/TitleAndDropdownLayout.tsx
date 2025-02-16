import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function TitleAndDropdownLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit pt-6 pb-6 flex items-center"}>
            <div className={"w-full h-10 flex items-center"}>
                {children}
            </div>
        </div>
    );
};