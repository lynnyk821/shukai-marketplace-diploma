import {FeaturedAdvertisementsPageLayout} from "./FeaturedAdvertisementsPageLayout.tsx";
import TitleAndDropdown from "./components/TitleAndDropdown/TitleAndDropdown.tsx";

export default function FeaturedAdvertisementsPage() {
    const filters = ["Від дешевих до дорогих", "Від дорогих до дешевих "]

    return (
        <FeaturedAdvertisementsPageLayout>
            <TitleAndDropdown filters={filters} />
        </FeaturedAdvertisementsPageLayout>
    );
};