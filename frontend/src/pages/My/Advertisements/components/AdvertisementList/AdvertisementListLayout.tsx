import {MyContainerProps} from "../../../../../types/help/my-container-props.ts";

export default function AdvertisementListLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex flex-col"}>
            <ul className={"grid grid-cols-4 gap-3"}>
                {children}
            </ul>
        </div>
    );
};