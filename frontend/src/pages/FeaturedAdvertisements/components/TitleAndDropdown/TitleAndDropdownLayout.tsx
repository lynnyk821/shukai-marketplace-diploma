import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function TitleAndDropdownLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit pb-8 flex items-center"}>
            <div className={"w-full h-10 flex items-center"}>
                {children}
            </div>
        </div>
    );
};