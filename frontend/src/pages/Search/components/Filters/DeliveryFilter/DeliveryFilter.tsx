import CheckboxesDropdown from "../../../../../common-components/CheckboxesDropdown/CheckboxesDropdown.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function DeliveryFilter() {
    const deliveryFilters = ["Meest", "Новапошта", "Укрпошта"];
    const [selectedDeliveries, setSelectedDeliveries] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const deliveriesParams = params.get("status");
        if (deliveriesParams) setSelectedDeliveries(deliveriesParams.split(","));
    }, []);

    const handleFilterChange = (values: string[]) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (values.length > 0) {
            searchParams.set("delivery", values.join(","));
        } else {
            searchParams.delete("status");
        }

        navigate({ search: searchParams.toString() });
    };

    return (
        <CheckboxesDropdown
            title="Методи доставки"
            options={deliveryFilters}
            selectedValues={selectedDeliveries}
            onSelectionChange={(values) => {
                setSelectedDeliveries(values);
                handleFilterChange(values);
            }}
            isOpenValue={true}
        />
    );
};