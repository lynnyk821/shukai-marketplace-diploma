import {CommonTitle} from "../../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = {
    setShowModal: (showModal: boolean) => void,
    register: any,
    selectedService: string | null,
    selectedCity: string | null,
    selectedBranch: string | null,
    description: string,
};

export default function DeliveryMethodButton({
                                                 setShowModal,
                                                 selectedCity, selectedService,
                                                 selectedBranch, description}: Props) {
    return (
        <div className={"flex flex-col gap-4 text-[#414141]"}>
            <CommonTitle text={"Спосіб доставки"} size={"xl"} />
            <button type="button"
                    className="w-full text-left font-inter  p-4 rounded-lg border border-[#414141] border-opacity-20
                        hover:bg-[#eee] hover:bg-opacity-35 transition duration-300 ease-in-out"
                    onClick={() => setShowModal(true)}
            >
                <label className="grid grid-cols-1 space-y-3 items-center cursor-pointer">
                    <p className="font-semibold">{`Служба доставки: ${selectedService}`}</p>
                    <p className="text-sm">{selectedCity} {selectedBranch}</p>
                    <p className="text-sm">{description}</p>
                </label>
            </button>
        </div>
    );
};