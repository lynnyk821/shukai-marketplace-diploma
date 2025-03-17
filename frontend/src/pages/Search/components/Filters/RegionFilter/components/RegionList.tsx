import { memo } from "react";
import Checkbox from "../../../../../../common-components/Checkbox/Checkbox.tsx";

interface RegionListProps {
    regions: string[];
    searchQuery: string;
    selectedRegions: string[];
    onRegionToggle: (region: string) => (checked: boolean) => void;
}

const RegionList = memo(({
                             regions,
                             searchQuery,
                             selectedRegions,
                             onRegionToggle
                         }: RegionListProps) => {
    const filteredRegions = regions.filter(region =>
        region.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 overflow-y-auto custom-scroll">
            {filteredRegions.map((region) => (
                <Checkbox
                    label={region}
                    checked={selectedRegions.includes(region)}
                    onChange={onRegionToggle(region)}
                />
            ))}
        </div>
    );
});

export default RegionList;