import {MyContainerProps} from "../../../../../../../../types/help/my-container-props.ts";

export default function SellerLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex flex-col gap-2"}>
            <div className={"flex gap-3"}>{children}</div>
        </div>
    );
};