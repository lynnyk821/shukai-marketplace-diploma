import {MyContainerProps} from "../../../../../../../../types/common/my-container-props.ts";

export default function SellerLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit mt-40 flex flex-col gap-2"}>
            <div className={"flex gap-3"}>{children}</div>
        </div>
    );
};