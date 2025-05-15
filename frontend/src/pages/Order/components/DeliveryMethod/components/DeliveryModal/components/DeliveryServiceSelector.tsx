type Props = {
    selectedService: string,
    onChange: (service: string) => void,
};

export function DeliveryServiceSelector({selectedService, onChange}: Props) {
    {console.log(selectedService)}
    return (
        <div className="mb-4">
            <label className="block mb-2 font-semibold">Служба доставки</label>
            <select
                className="w-full border p-2 rounded"
                value={selectedService}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="Нова пошта">Нова пошта</option>
                <option value="Укрпошта">Укрпошта</option>
                <option value="Meest">Meest</option>
            </select>
        </div>
    );
};