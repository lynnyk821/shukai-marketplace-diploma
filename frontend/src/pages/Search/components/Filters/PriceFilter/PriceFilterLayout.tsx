import {MyContainerProps} from "../../../../../types/common/my-container-props.ts";

export default function PriceFilterLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit font-inter flex flex-col gap-3 mb-3"}>
            {children}
        </div>
    );
};