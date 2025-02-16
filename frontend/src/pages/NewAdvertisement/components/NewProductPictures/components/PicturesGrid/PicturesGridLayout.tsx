import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function PicturesGridLayout({children}: MyContainerProps) {
    return (
        <ul className={"w-2/3 h-full grid grid-cols-4 gap-3"}>{children}</ul>
    );
};