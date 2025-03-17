import CheckboxesDropdown from "../../../../../common-components/CheckboxesDropdown/CheckboxesDropdown.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function PaymentFilter() {
    const payments = ["Післяплата", "Продавцю на карту", "Безпечна оплата",]
    const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paymentsParams = params.get("payment");
        if (paymentsParams) setSelectedPayments(paymentsParams.split(","));
    }, []);

    const handleFilterChange = (values: string[]) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (values.length > 0) {
            searchParams.set("payment", values.join(","));
        } else {
            searchParams.delete("payment");
        }

        navigate({ search: searchParams.toString() });
    };
    return (
        <CheckboxesDropdown
            title="Методи оплати"
            options={payments}
            selectedValues={selectedPayments}
            onSelectionChange={(values) => {
                setSelectedPayments(values);
                handleFilterChange(values);
            }}
        />
    );
};