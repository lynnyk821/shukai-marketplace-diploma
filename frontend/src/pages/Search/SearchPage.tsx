import SearchPageLayout from "./SearchPageLayout.tsx";
import TitleAndDropdown from "./components/TItleAndDropdown/TitleAndDropdown.tsx";
import Filters from "./components/Filters/Filters.tsx";
import AdvertisementResultGrid from "./components/AdvertisementsResultGrid/AdvertisementResultGrid.tsx";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function SearchPage() {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.match("advertisement")){

        }
    }, []);

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