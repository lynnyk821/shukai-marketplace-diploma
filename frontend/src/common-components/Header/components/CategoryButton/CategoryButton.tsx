import {Icon} from "@iconify/react";
import {useAppStore} from "../../../../utils/hooks/useAppStore.ts";
import CategoryButtonLayout from "./CategoryButtonLayout.tsx";
import CatalogCategories from "./components/CatalogCategories/CatalogCategories.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import {LegacyRef} from "react";

export default function CategoryButton() {
    const { isCatalogOpen, setIsCatalogOpen } = useAppStore();

    const ref = (useClickOutside(() => {
        setIsCatalogOpen(false);
    })) as LegacyRef<HTMLDivElement> | undefined;

    return (
        <div ref={ref}>
            <CategoryButtonLayout onClick={() => setIsCatalogOpen(!isCatalogOpen)}>
                {isCatalogOpen
                    ? <Icon icon="lets-icons:close-round" width="24" height="24" />
                    : <Icon icon="ic:round-menu" width="24" height="24"/>
                }
                Каталог
            </CategoryButtonLayout>
            <CatalogCategories />
        </div>
    );
};