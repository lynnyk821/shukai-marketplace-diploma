import CatalogCategoriesLayout from "./CatalogCategoriesLayout.tsx";
import CategoriesGrid from "./components/CategoriesGrid.tsx";
import {CATALOG_CATEGORIES} from "../../../../globals-env.ts";
import SlideDown from "../../../../utils/animations/SlideDown.tsx";

export default function CatalogCategories() {
    return (
        <div className={"w-full h-full relative overflow-hidden z-40"}>
            <SlideDown bottom={-300} duration={1.5}>
                <CatalogCategoriesLayout>
                    <CategoriesGrid items={CATALOG_CATEGORIES} />
                </CatalogCategoriesLayout>
            </SlideDown>
        </div>
    );
};