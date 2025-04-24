import { useState, useEffect } from "react";
import { fetchWarehouses } from "../help.ts";

type Warehouse = {
    warehouse: string;
    schedule: any;
};

type Props = {
    cityRef: string,
    setSelectedWarehouse: React.Dispatch<React.SetStateAction<string>>;
};

export function WarehouseSelector({ cityRef, setSelectedWarehouse }: Props) {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

    useEffect(() => {
        const loadWarehouses = async () => {
            if (!cityRef) return;

            try {
                setLoading(true);
                setError("");
                const data = await fetchWarehouses(cityRef);
                setWarehouses(data);
                if (data.length > 0) setSelectedWarehouse((data as Warehouse[])[0].warehouse);
            } catch (err) {
                setError("Не вдалося завантажити відділення");
                console.error("Error fetching warehouses:", err);
            } finally {
                setLoading(false);
            }
        };

        loadWarehouses();
    }, [cityRef, setSelectedWarehouse]);

    return (
        <div className="mb-4">
            <label className="block mb-2 font-semibold">Відділення</label>
            <select
                className="w-full border p-2 rounded"
                onChange={(e) => setSelectedWarehouse(e.target.value)}
                disabled={loading || !warehouses.length}
            >
                {loading && <option>Завантаження...</option>}
                {error && <option className="text-red-500">{error}</option>}
                {warehouses.map((warehouse, index) => (
                    <option key={index} value={warehouse.warehouse}>
                        {warehouse.warehouse}
                    </option>
                ))}
            </select>
        </div>
    );
}