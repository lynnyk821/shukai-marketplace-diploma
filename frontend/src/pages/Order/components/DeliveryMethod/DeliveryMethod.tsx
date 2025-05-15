import { useState } from "react";
import DeliveryMethodButton from "./components/DeliveryMethodButton.tsx";
import { useClickOutside } from "../../../../utils/hooks/useClickOutside.ts";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal.tsx";
import {FieldErrors, UseFormRegister, UseFormSetValue} from "react-hook-form";
import {OrderRequest} from "../../../../types/request/order-request.ts";

type Props = {
    register: UseFormRegister<OrderRequest>;
    setValue: UseFormSetValue<OrderRequest>;
    errors: FieldErrors<OrderRequest>,
};

const DeliveryMethod = ({ register, setValue, errors }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState("Нова пошта");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("");

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
            {/* Реєстрація полів для правильної валідації */}
            <input type="hidden" {...register("delivery.service")} />
            <input type="hidden" {...register("delivery.city")} />
            <input type="hidden" {...register("delivery.warehouse")} />

            <DeliveryMethodButton
                setShowModal={setShowModal}
                selectedService={selectedService}
                selectedCity={selectedCity}
                selectedBranch={selectedWarehouse}
                register={register}
                description={"Вартість доставки від 67 до 90 грн до 30 кг за товар"}
            />

            {/* Відображення помилки */}
            {errors.delivery?.service && (
                <div className="text-red-500 text-sm">
                    {errors.delivery.service.message}
                </div>
            )}
            {errors.delivery?.city && (
                <div className="text-red-500 text-sm">
                    {errors.delivery.city.message}
                </div>
            )}
            {errors.delivery?.warehouse && (
                <div className="text-red-500 text-sm">
                    {errors.delivery.warehouse.message}
                </div>
            )}

            {showModal && (
                <DeliveryModal
                    ref={modalRef}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                    initialService={selectedService}
                    initialCity={selectedCity}
                    initialWarehouse={selectedWarehouse}
                />
            )}
        </div>
    );
};

export default DeliveryMethod;
