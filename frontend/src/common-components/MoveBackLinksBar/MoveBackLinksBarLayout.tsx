import {MyContainerProps} from "../../../../../types/my-container-props.ts";

export default function MoveBackLinksBarLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-24 flex items-center"}>
            {children}
        </div>
    );
};