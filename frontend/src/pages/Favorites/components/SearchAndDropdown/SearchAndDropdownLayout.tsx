import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function SearchAndDropdownLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit pb-8 flex items-center"}>
            <div className={"w-full h-10 flex items-center justify-end"}>
                {children}
            </div>
        </div>
    );
};