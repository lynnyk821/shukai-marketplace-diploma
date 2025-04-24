import { useState } from "react";
import DeliveryMethodButton from "./components/DeliveryMethodButton.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import DeliveryModal from "./components/DeliveryModal/DeliveryModal.tsx";

type Props = {
    register: any;
};

const DeliveryMethod = ({ register }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState("Новапошта");
    const [selectedCity, setSelectedCity] = useState("Черкаси");
    const [selectedBranch, setSelectedBranch] = useState("Відділення 12, вул. Молоткова 20");

    const modalRef = useClickOutside<HTMLDivElement>(() => setShowModal(false));

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
                    setShowModal={setShowModal}
                    setSelectedCity={setSelectedCity}
                    setSelectedBranch={setSelectedBranch}
                    setSelectedService={setSelectedService}
                />
            )}
        </div>
    );
};

export default DeliveryMethod;