import DeliveryAndPaymentLayout from "./DeliveryAndPaymentLayout.tsx";

type Props = {
    paymentMethods: string[],
    deliveryMethods: string[],
}

export default function DeliveryAndPayment({ paymentMethods, deliveryMethods }: Props) {
    return (
        <DeliveryAndPaymentLayout>
            <ul className={"h-fit flex flex-col gap-2 text-[#414141] font-inter text-lg"}>
                <p className={"font-bold text-xl mb-2"}>Способи доставки</p>
                {deliveryMethods.map((method, index) => (
                    <li key={index}>{method}</li>
                ))}
            </ul>
            <ul className={"h-fit flex flex-col gap-2 text-[#414141] font-inter text-lg"}>
                <p className={"font-bold text-xl mb-2"}>Способи оплати</p>
                {paymentMethods.map((method, index) => (
                    <li key={index}>{method}</li>
                ))}
            </ul>
        </DeliveryAndPaymentLayout>
    );
};