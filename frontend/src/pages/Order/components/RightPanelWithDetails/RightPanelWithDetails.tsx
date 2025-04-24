import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

export default function RightPanelWithDetails() {
    return (
        <div className="w-1/4 h-4/5 border border-solid rounded-lg border-[#414141] border-opacity-20 p-6">
            <div className="space-y-3 sticky top-4 text-[#414141] font-inter">
                <CommonTitle text={"Ваше замовлення"} size={"xl"} />
                <div className="flex justify-between">
                    <span>Доставка: </span>
                    <span>Оплата у відділені</span>
                </div>
                <div className="flex justify-between">
                    <span>До сплати: </span>
                    <span className={"font-bold"}>34 500 грн</span>
                </div>
            </div>
        </div>
    );
};