import {FavoritesPageLayout} from "./FavoritesPageLayout.tsx";
import SearchAndDropdown from "./components/SearchAndDropdown/SearchAndDropdown.tsx";
import FavoriteProductsGrid from "./components/FavoriteProductsGrid/FavoriteProductsGrid.tsx";

export default function FavoritesPage() {
    const filters = ["Від дешевих до дорогих", "Від дорогих до дешевих "]

    return (
        <FavoritesPageLayout>
            <SearchAndDropdown filters={filters} />
            <FavoriteProductsGrid />
        </FavoritesPageLayout>
    );
};