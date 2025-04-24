import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function ProductPicturesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-[70%] h-full"}>
            {children}
        </div>
    );
};