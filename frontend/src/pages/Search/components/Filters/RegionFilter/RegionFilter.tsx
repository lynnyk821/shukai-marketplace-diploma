import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegionFilterLayout from "./RegionFilterLayout.tsx";
import RegionFilterHeader from "./components/RegionFilterHeader.tsx";
import RegionSearch from "./components/RegionSearch.tsx";
import RegionList from "./components/RegionList.tsx";

export default function RegionFilter() {
    const regions = [
        "Київ", "Харків", "Одеса", "Дніпро", "Львів",
        "Черкаси", "Вінниця", "Житомир", "Полтава", "Івано-Франківськ"
    ];

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const regionsParam = params.get("regions");
        if (regionsParam) setSelectedRegions(regionsParam.split(","));
    }, []);

    const updateUrl = (regions: string[]) => {
        const params = new URLSearchParams(window.location.search);

        if (regions.length > 0) {
            params.set("regions", regions.join(","))
        } else {
            params.delete("regions")
        }

        navigate({ search: params.toString() });
    };

    const handleRegionToggle = (region: string) => (checked: boolean) => {
        const newRegions = checked
            ? [...selectedRegions, region]
            : selectedRegions.filter(r => r !== region);
        setSelectedRegions(newRegions);
        updateUrl(newRegions);
    };

    return (
        <RegionFilterLayout>
            <RegionFilterHeader
                title="Регіон"
                isActive={isActive}
                onToggle={() => {
                    setIsActive(!isActive);
                    setSearchQuery("");
                }}
            />

            {isActive && (
                <div className="w-full h-72 flex flex-col gap-3">
                    <RegionSearch
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                    <RegionList
                        regions={regions}
                        searchQuery={searchQuery}
                        selectedRegions={selectedRegions}
                        onRegionToggle={handleRegionToggle}
                    />
                </div>
            )}
        </RegionFilterLayout>
    );
}
