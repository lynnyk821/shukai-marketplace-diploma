import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function AdvertisementResultGridLayout({children}: MyContainerProps) {
    return (
        <div className={"w-3/4 h-full"}>
            <ul className={"w-full flex-1 grid grid-cols-4 gap-x-4 gap-y-8"}>
                {children}
            </ul>
        </div>
    );
};