import CatalogCategoriesLayout from "./CatalogCategoriesLayout.tsx";
import CategoriesGrid from "./components/CategoriesGrid.tsx";
import {CATALOG_CATEGORIES} from "../../../../../../globals-env.ts";
import SlideDown from "../../../../../../utils/animations/SlideDown.tsx";
import {useAppStore} from "../../../../../../utils/hooks/useAppStore.ts";

export default function CatalogCategories() {
    const { isCatalogOpen } = useAppStore();

    return (
        <div className={"w-full absolute centered overflow-hidden top-24 left-0 z-30"}>
            <SlideDown opacity={1} duration={1} bottom={-300}
                       isOpen={isCatalogOpen}
            >
                <CatalogCategoriesLayout>
                    <CategoriesGrid items={CATALOG_CATEGORIES} />
                </CatalogCategoriesLayout>
            </SlideDown>
        </div>
    );
};