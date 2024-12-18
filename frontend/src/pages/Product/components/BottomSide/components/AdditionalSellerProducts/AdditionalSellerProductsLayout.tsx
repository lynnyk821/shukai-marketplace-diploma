import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function AdditionalSellerProductsLayout({children}: MyContainerProps) {
    return (
        <div className={"mt-12"}>{children}</div>
    );
};