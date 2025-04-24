type Props = {
    selectedService: string,
    onChange: (service: string) => void,
};

export function DeliveryServiceSelector({selectedService, onChange}: Props) {
    return (
        <div className="mb-4">
            <label className="block mb-2 font-semibold">Служба доставки</label>
            <select
                className="w-full border p-2 rounded"
                value={selectedService}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="novaposhta">Нова Пошта</option>
                <option value="ukrposhta">Укрпошта</option>
                <option value="meest">Meest</option>
            </select>
        </div>
    );
};