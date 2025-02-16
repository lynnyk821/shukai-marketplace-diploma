import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function BigPictureLayout({children}: MyContainerProps) {
    return (
        <button className={"w-1/3 h-full flex flex-col gap-4"}>
            {children}
        </button>
    );
};