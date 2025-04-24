import {useState, useMemo, useCallback, SetStateAction} from "react";
import { fetchCities } from "../help";
import * as React from "react";

type City = {
    id: string;
    ref: string,
    description: string;
    cityName: string;
    regionName: string;
};

type Props = {
    setCityRef: React.Dispatch<React.SetStateAction<string>>,
    setSelectedCity: React.Dispatch<SetStateAction<string>>,
};

export function CitySelector({ setSelectedCity, setCityRef }: Props) {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState<City[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hasInitialSearch, setHasInitialSearch] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const searchCities = useCallback(async (term: string) => {
        try {
            setLoading(true);
            const data = await fetchCities(term);
            setCities(data);
        } catch (err) {
            console.error("Failed to load cities:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSearch = useCallback((term: string) => {
        if (timerId) clearTimeout(timerId);

        const newTimerId = setTimeout(() => {
            if (term.length > 0) {
                searchCities(term);
                setHasInitialSearch(true);
            }
        }, 500);

        setTimerId(newTimerId);
    }, [timerId, searchCities]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
        setIsDropdownOpen(true);
    };

    const handleSelectCity = (city: City) => {
        setCityRef(city.ref)
        setSelectedCity(city.cityName);
        setIsDropdownOpen(false);
        const selectedCity = cities.find(c => c.id === city.id);
        setSearchTerm(selectedCity?.description || selectedCity?.cityName || "");
    };

    const filteredCities = useMemo(() => {
        return cities.filter(city =>
            [city.description, city.cityName, city.regionName].some(field =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [cities, searchTerm]);

    const showInitialMessage = !hasInitialSearch && !searchTerm;
    const showNoResults = hasInitialSearch && filteredCities.length === 0 && !loading;

    return (
        <div className="mb-4 relative">
            <label className="block mb-2 font-semibold">Місто</label>
            <div className="relative">
                <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() => setIsDropdownOpen(true)}
                    placeholder="Введіть назву міста або області"
                />

                {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                        {showInitialMessage ? (
                            <div className="p-2 text-gray-500">Будь ласка, введіть назву міста для пошуку</div>
                        ) : loading ? (
                            <div className="p-2 text-gray-500">Завантаження...</div>
                        ) : showNoResults ? (
                            <div className="p-2 text-gray-500">Нічого не знайдено</div>
                        ) : (
                            filteredCities.map((city) => (
                                <div
                                    key={city.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelectCity(city)}
                                >
                                    {city.description || `${city.cityName}, ${city.regionName}`}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}