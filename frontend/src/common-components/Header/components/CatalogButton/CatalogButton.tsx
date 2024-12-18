import {Icon} from "@iconify/react";
import {useAppStore} from "../../../../utils/hooks/useAppStore.ts";
import CatalogButtonLayout from "./CatalogButtonLayout.tsx";
import CatalogCategories from "./components/CatalogCategories/CatalogCategories.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import {LegacyRef} from "react";

export default function CatalogButton() {
    const { isCatalogOpen, setIsCatalogOpen } = useAppStore();

    const ref = (useClickOutside(() => {
        setIsCatalogOpen(false);
    })) as LegacyRef<HTMLDivElement> | undefined;

    return (
        <div ref={ref}>
            <CatalogButtonLayout onClick={() => setIsCatalogOpen(!isCatalogOpen)}>
                {isCatalogOpen
                    ? <Icon icon="lets-icons:close-round" width="24" height="24" />
                    : <Icon icon="ic:round-menu" width="24" height="24"/>
                }
                Каталог
            </CatalogButtonLayout>
            <CatalogCategories />
        </div>
    );
};