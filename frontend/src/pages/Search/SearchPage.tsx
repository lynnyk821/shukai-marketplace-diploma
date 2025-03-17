import SearchPageLayout from "./SearchPageLayout.tsx";
import TitleAndDropdown from "./components/TItleAndDropdown/TitleAndDropdown.tsx";
import Filters from "./components/Filters/Filters.tsx";
import AdvertisementResultGrid from "./components/AdvertisementsResultGrid/AdvertisementResultGrid.tsx";

export default function SearchPage() {
    return (
        <SearchPageLayout>
            <TitleAndDropdown />
            <div className={"w-full flex"}>
                <Filters></Filters>
                <AdvertisementResultGrid></AdvertisementResultGrid>
            </div>
        </SearchPageLayout>
    );
};