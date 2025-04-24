import {forwardRef, LegacyRef, SetStateAction, useState} from "react";
import {DeliveryServiceSelector} from "./components/DeliveryServiceSelector.tsx";
import {CitySelector} from "./components/CitySelector.tsx";
import {WarehouseSelector} from "./components/WarehouseSelector.tsx";

type Props = {
    setShowModal: (show: boolean) => void,
    setSelectedCity: React.Dispatch<SetStateAction<string>>,
    setSelectedBranch: React.Dispatch<SetStateAction<string>>,
    setSelectedService: React.Dispatch<SetStateAction<string>>,
};

const DeliveryModal = forwardRef(({
    setShowModal, setSelectedBranch,
    setSelectedService, setSelectedCity
}: Props, ref: LegacyRef<HTMLDivElement>) => {
    const [cityRef, setCityRef] = useState<string>("")
    const [selectedThisCity, setSelectedThisCity] = useState<string>("");
    const [selectedThisWarehouse, setSelectedThisWarehouse] = useState<string>("");
    const [selectedThisService, setSelectedThisService] = useState<string>("");

    const handleOnClick = () => {
        setShowModal(false);
        setSelectedCity(selectedThisCity);
        setSelectedBranch(selectedThisWarehouse);
        setSelectedService(selectedThisService);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div ref={ref} className="bg-white p-6 rounded shadow-lg w-96">
                <DeliveryServiceSelector
                    selectedService={selectedThisService}
                    onChange={setSelectedThisService}
                />
                <CitySelector
                    setCityRef={setCityRef}
                    setSelectedCity={setSelectedThisCity}
                />
                <WarehouseSelector
                    cityRef={cityRef}
                    setSelectedWarehouse={setSelectedThisWarehouse}
                />
                <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                    onClick={handleOnClick}
                >
                    Зберегти
                </button>
            </div>
        </div>
    );
});

export default DeliveryModal;