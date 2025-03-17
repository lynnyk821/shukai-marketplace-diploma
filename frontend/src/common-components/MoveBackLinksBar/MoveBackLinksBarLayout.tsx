import {MyContainerProps} from "../../types/common/my-container-props.ts";

export default function MoveBackLinksBarLayout({children}: MyContainerProps) {
    return (
        <div className={"w-fit h-24 flex items-center"}>
            {children}
        </div>
    );
};