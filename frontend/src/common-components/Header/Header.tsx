import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "../Logo/Logo.tsx";
import CatalogButton from "./components/CatalogButton/CatalogButton.tsx";
import {InputWithCategories} from "./components/InputWithCategories/InputWithCategories.tsx";
import AddButton from "./components/AddButton/AddButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogo from "./components/UserLogo/UserLogo.tsx";
import {useAppStore} from "../../utils/hooks/useAppStore.ts";
import CatalogCategories from "./components/CatalogButton/components/CatalogCategories/CatalogCategories.tsx";

export function Header() {
    const {isCatalogOpen, setIsCatalogOpen} = useAppStore();

    return (
        <>
            <HeaderLayout>
                <Logo></Logo>
                <CatalogButton onClick={() => setIsCatalogOpen(!isCatalogOpen)}/>
                <InputWithCategories />
                <AddButton />
                <AdditionalButtons />
                <UserLogo />
            </HeaderLayout>
            {isCatalogOpen ? <CatalogCategories /> : null}
        </>
    );
}