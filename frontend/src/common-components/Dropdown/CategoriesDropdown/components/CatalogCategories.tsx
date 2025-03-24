import CatalogueCategoriesLayout from "./CatalogueCategoriesLayout.tsx";
import CategoriesGrid from "./components/CategoriesGrid.tsx";
import SlideDown from "../../../../utils/animations/SlideDown.tsx";
import {useAppStore} from "../../../../utils/hooks/useAppStore.ts";
import {useFetchCategories} from "../../../../utils/hooks/useFetchCategories.ts";

export default function CatalogCategories() {
    const { isCatalogueOpen } = useAppStore();
    const { data: categories, isLoading, error } = useFetchCategories();

    if (error) return null;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={"w-full absolute centered overflow-hidden top-24 left-0 z-10"}>
            <SlideDown opacity={1} duration={1} bottom={-300} isOpen={isCatalogueOpen}>
                <CatalogueCategoriesLayout>
                    {categories && <CategoriesGrid items={categories} />}
                </CatalogueCategoriesLayout>
            </SlideDown>
        </div>
    );
};