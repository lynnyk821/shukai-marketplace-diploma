import DeliveryAndPaymentLayout from "./DeliveryAndPaymentLayout.tsx";

type Props = {
    paymentMethods: string[],
    deliveryMethods: string[],
}

export default function DeliveryAndPayment({ paymentMethods, deliveryMethods }: Props) {
    return (
        <DeliveryAndPaymentLayout>
            <ul className={"h-fit flex flex-col gap-2 text-[#414141] font-inter"}>
                <p className={"font-bold text-lg mb-2"}>Методи доставки</p>
                {deliveryMethods.map((method, index) => (
                    <li className={"text-[16px]"} key={index}>{method}</li>
                ))}
            </ul>
            <ul className={"h-fit flex flex-col gap-2 text-[#414141] font-inter"}>
                <p className={"font-bold text-lg mb-2"}>Методи оплати</p>
                {paymentMethods.map((method, index) => (
                    <li className={"text-[16px]"} key={index}>{method}</li>
                ))}
            </ul>
        </DeliveryAndPaymentLayout>
    );
};