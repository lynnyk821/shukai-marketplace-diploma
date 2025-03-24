import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function BottomSideLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit mt-16 flex flex-col"}>
            {children}
        </div>
    );
};