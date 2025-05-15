import {useEffect, useState} from "react";
import {request} from "../../../../utils/helpers/request.ts";
import {RegionProps} from "../types/region-props.ts";

type Props = {
    value: string;
    onSelectRegion: (region: RegionProps) => void;
};

export default function RegionListResult({ value, onSelectRegion }: Props) {
    const [regionList, setRegionList] = useState<RegionProps[]>([]);

    useEffect(() => {
        const handler = setTimeout(() => {
            const fetchRegions = async () => {
                try {
                    const response = await request<{ data: RegionProps[] }>(
                        `catalogue-service/api/region?partName=${value}`, "GET"
                    );
                    setRegionList(response.data ?? []);
                    console.log(response.data);
                } catch (e) {
                    console.error(e);
                    setRegionList([]);
                }
            };

            if (value.trim() !== "") {
                fetchRegions();
            }
        }, 300);

        return () => clearTimeout(handler);
    }, [value]);

    return (
        <div className="w-full h-full">
            {regionList.length > 0 && (
                <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    {regionList.map((region, i) => (
                        <div
                            className={
                                "text-left p-2 hover:bg-gray-100 cursor-pointer " +
                                "transition duration-150 ease-in-out " +
                                "font-inter text-[#414141]"
                            }
                            key={i}
                            onClick={() => onSelectRegion(region)}
                        >
                            {region.description}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}