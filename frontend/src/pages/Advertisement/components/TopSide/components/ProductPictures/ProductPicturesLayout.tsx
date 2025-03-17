import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";

export default function ProductPicturesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-3/5 h-full flex items-center justify-center flex-col gap-y-4"}>
            {children}
        </div>
    );
};