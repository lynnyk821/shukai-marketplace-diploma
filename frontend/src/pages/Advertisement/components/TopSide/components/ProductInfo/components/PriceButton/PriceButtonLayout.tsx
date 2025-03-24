import {MyContainerProps} from "../../../../../../../../types/help/my-container-props.ts";

export default function PriceButtonLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex items-center gap-5"}>
            {children}
        </div>
    );
};