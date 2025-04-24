import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = {
    register: any
};

export default function PaymentMethod({register}: Props) {
    return (
        <div className="space-y-4 text-[#414141] font-inter">
            <CommonTitle text={"Спосіб оплати"} size={"xl"} />
            <button
                className="w-full text-left p-4 rounded space-y-3
                border border-solid border-[#414141] border-opacity-20
                hover:bg-[#eee] hover:bg-opacity-35 transition duration-300 ease-in-out"
            >
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="safe"
                            {...register("paymentMethod")}
                            defaultChecked
                            className="accent-black"
                        />
                        <span className="font-semibold">Безпечна оплата</span>
                    </label>
                    <p className="text-sm text-gray-400 ml-6">
                        Продавець отримує гроші, лише коли ви заберете замовлення
                    </p>
                </div>

                <div className="ml-6 space-y-1">
                    <p className="text-sm">✓ Очікуйте оплата без різниці та переплат</p>
                    <p className="text-sm">✓ Без прихованих комісій</p>
                    <p className="text-sm">✓ Повернення коштів у разі проблем</p>
                </div>
            </button>
        </div>
    );
};