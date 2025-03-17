import {useEffect, useState} from "react";
import {RegionProps} from "../../../../../types/common/advertisement/region-props.ts";
import {request} from "../../../../../utils/helpers/request.ts";

type Props = {
    value: string;
    onSelectRegion: (region: {
        regionName: string,
        cityName: string,
        description: string
    }) => void;
};

export default function RegionListResult({ value, onSelectRegion }: Props) {
    const [regionList, setRegionList] = useState<RegionProps[]>([]);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await request<{ data: RegionProps[] }>(
                    `search-service/api/region?partName=${value}`, "GET"
                );

                setRegionList(response.data ?? []);
            } catch (e) {
                console.error(e);
                setRegionList([]);
            }
        };

        if (value.trim() !== "") {
            fetchRegions();
        }
    }, [value]);

    return (
        <div className="w-full h-full">
            {value.trim() !== "" && regionList.length > 0 && (
                <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    {regionList.map((region, i) => (
                        <button
                            className={
                                "text-left p-2 hover:bg-gray-100 cursor-pointer " +
                                "transition duration-150 ease-in-out " +
                                "font-inter text-[#414141]"
                            }
                            key={i}
                            onClick={() => onSelectRegion(region)}
                        >
                            {region.description}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}