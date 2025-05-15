import {MyContainerProps} from "../../../types/help/my-container-props.ts";

export default function NewAdPriceLayout({children}: MyContainerProps) {
    return (
        <div className={"h-fit flex flex-col gap-3 mb-8"}>
            {children}
        </div>
    );
};