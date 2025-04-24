import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function DeliveryAndPaymentLayout({children}: MyContainerProps) {
    return (
        <div className={"w-1/3 grid grid-cols-2"}>{children}</div>
    );
};