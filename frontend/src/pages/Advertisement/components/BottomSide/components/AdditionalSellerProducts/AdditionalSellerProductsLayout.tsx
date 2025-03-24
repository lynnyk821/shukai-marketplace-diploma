import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function AdditionalSellerProductsLayout({children}: MyContainerProps) {
    return (
        <div className={"mt-12 flex flex-col gap-8"}>{children}</div>
    );
};