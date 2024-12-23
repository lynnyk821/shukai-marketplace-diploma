import {FavoritesLayout} from "./FavoritesLayout.tsx";
import {Title} from "../../common-components/Title/Title.tsx";
import SearchAndDropdown from "./components/SearchAndDropdown/SearchAndDropdown.tsx";
import FavoriteProductsGrid from "./components/FavoriteProductsGrid/FavoriteProductsGrid.tsx";

export default function Favorites() {
    const filters = ["Від дешевих до дорогих", "Від дорогих до дешевих "]

    return (
        <FavoritesLayout>
            <Title text={"Обрані оголошення"} />
            <SearchAndDropdown filters={filters} />
            <FavoriteProductsGrid />
        </FavoritesLayout>
    );
};