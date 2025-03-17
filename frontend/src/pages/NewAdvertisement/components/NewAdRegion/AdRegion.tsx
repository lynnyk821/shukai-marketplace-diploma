import AdRegionLayout from "./AdRegionLayout.tsx";
import NewAdvertisementTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import NewAdvertisementInput from "../../../../common-components/Inputs/NewAdvertisementInput/NewAdvertisementInput.tsx";
import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import RegionListResult from "./components/RegionListResult.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import {CreateNewAdvertisementRequest} from "../../../../types/new-advertisement/create-new-advertisement-request.ts";
import {RegionProps} from "../../../../types/common/advertisement/region-props.ts";
import {useState} from "react";

type Props = {
    region: RegionProps,
    setValue: UseFormSetValue<CreateNewAdvertisementRequest>;
    trigger: UseFormTrigger<CreateNewAdvertisementRequest>;
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