import {MyContainerProps} from "../../../../../../types/help/my-container-props.ts";

export default function DeliveryAndPaymentLayout({children}: MyContainerProps) {
    return (
        <div className={"w-2/5 grid grid-cols-2"}>{children}</div>
    );
};