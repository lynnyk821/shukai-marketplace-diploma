import { useState } from "react";
import DeliveryMethodButton from "./components/DeliveryMethodButton.tsx";
import { useClickOutside } from "../../../../utils/hooks/useClickOutside.ts";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal.tsx";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import {OrderRequest} from "../../../../types/request/order-request.ts";

type Props = {
    register: UseFormRegister<OrderRequest>;
    setValue: UseFormSetValue<OrderRequest>;
};

const DeliveryMethod = ({ register, setValue }: Props) => {
    const [showModal, setShowModal] = useState(false);

    const [selectedService, setSelectedService] = useState("Новапошта");
    const [selectedCity, setSelectedCity] = useState("Черкаси");
    const [selectedBranch, setSelectedWarehouse] = useState("Відділення 12, вул. Молоткова 20");

    const modalRef = useClickOutside<HTMLDivElement>(() => setShowModal(false));

    const handleSave = (newData: {
        service: string;
        city: string;
        warehouse: string;
    }) => {
        setSelectedService(newData.service);
        setSelectedCity(newData.city);
        setSelectedWarehouse(newData.warehouse);

        setValue("delivery.service", newData.service);
        setValue("delivery.city", newData.city);
        setValue("delivery.warehouse", newData.warehouse);
    };

    return (
        <div className="space-y-4">
            <DeliveryMethodButton
                setShowModal={setShowModal}
                selectedService={selectedService}
                selectedCity={selectedCity}
                selectedBranch={selectedBranch}
                register={register}
                description={"Вартість доставки від 67 до 90 грн до 30 кг за товар"}
            />

            {showModal && (
                <DeliveryModal
                    ref={modalRef}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default DeliveryMethod;
