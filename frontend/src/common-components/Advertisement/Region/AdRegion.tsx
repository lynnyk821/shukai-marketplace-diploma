import AdRegionLayout from "./AdRegionLayout.tsx";
import NewAdvertisementTitle from "../../Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import NewAdvertisementInput from "../../Inputs/NewAdvertisementInput/NewAdvertisementInput.tsx";
import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import RegionListResult from "./components/RegionListResult.tsx";
import {useClickOutside} from "../../../utils/hooks/useClickOutside.ts";
import {useState} from "react";
import {AdRequest} from "../../../types/request/ad-request.ts";
import {RegionProps} from "./types/region-props.ts";

type Props = {
    region: RegionProps,
    setValue: UseFormSetValue<AdRequest>;
    trigger: UseFormTrigger<AdRequest>;
    error?: string;
};

export default function AdRegion({ region, setValue, trigger, error }: Props) {
    const [isListVisible, setIsListVisible] = useState(false); // Стан для відображення/приховування списку

    const listRef = useClickOutside<HTMLDivElement>(() => {
        setIsListVisible(false);
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue("region.description", e.target.value, { shouldValidate: true });
        setIsListVisible(true);
    };

    const handleSelectRegion = async (selectedRegion: RegionProps) => {
        setValue("region", selectedRegion, { shouldValidate: true });
        await trigger("region");
        setIsListVisible(false);
    };

    return (
        <AdRegionLayout>
            <NewAdvertisementTitle title="Регіон" />
            <NewAdvertisementInput
                type="text"
                value={region.description}
                onChange={handleInputChange}
                placeholder="Наприклад: Київ"
                error={error}
                onFocus={() => setIsListVisible(true)}
            />
            {isListVisible && (
                <div ref={listRef} className="w-full absolute z-50 top-28">
                    <RegionListResult value={region.description} onSelectRegion={handleSelectRegion} />
                </div>
            )}
        </AdRegionLayout>
    );
}