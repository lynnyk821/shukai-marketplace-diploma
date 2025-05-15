import {Icon} from "@iconify/react";
import {useAppStore} from "../../../utils/hooks/useAppStore.ts";
import CatalogCategories from "./components/CatalogCategories.tsx";
import {useClickOutside} from "../../../utils/hooks/useClickOutside.ts";
import {LegacyRef} from "react";
import ButtonWithoutBackground from "../../Buttons/ButtonWithoutBackground/ButtonWithoutBackground.tsx";
import CategoryButtonLayout from "./CategoryButtonLayout.tsx";

export default function CategoryButton() {
    const { isCatalogueOpen, setIsCatalogueOpen } = useAppStore();

    const ref = useClickOutside(() => {
        setIsCatalogueOpen(false);
    }) as LegacyRef<HTMLDivElement> | undefined;

    return (
        <CategoryButtonLayout ref={ref}>
            <ButtonWithoutBackground
                onClick={() => setIsCatalogueOpen(!isCatalogueOpen)}
            >
                {isCatalogueOpen
                    ? <Icon icon="lets-icons:close-round" width="24" height="24" />
                    : <Icon icon="ic:round-menu" width="24" height="24"/>
                }
                Каталог
            </ButtonWithoutBackground>
            <CatalogCategories />
        </CategoryButtonLayout>
    );
};