import {FeaturedAdvertisementsPageLayout} from "./FeaturedAdvertisementsPageLayout.tsx";
import TitleAndDropdown from "./components/TitleAndDropdown/TitleAndDropdown.tsx";
import FavoriteProductsGrid from "./components/FeaturedAdvertisementsGrid/FavoriteProductsGrid.tsx";

export default function FeaturedAdvertisementsPage() {
    const filters = ["Від дешевих до дорогих", "Від дорогих до дешевих "]

    return (
        <FeaturedAdvertisementsPageLayout>
            <TitleAndDropdown filters={filters} />
            <FavoriteProductsGrid />
        </FeaturedAdvertisementsPageLayout>
    );
};