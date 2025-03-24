import {MyContainerProps} from "../../../../../../../../types/help/my-container-props.ts";

export default function BuyAndCartButtonLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex gap-4 py-10"}>
            {children}
        </div>
    );
};