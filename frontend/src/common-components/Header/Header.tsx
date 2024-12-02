import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "./components/Logo/Logo.tsx";
import {LOGO_NAME} from "../../globals-env.ts";
import CatalogButton from "./components/CatalogButton/CatalogButton.tsx";
import {CategoriesInput} from "./components/CategoriesInput/CategoriesInput.tsx";
import AddButton from "./components/AddButton/AddButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogo from "./components/UserLogo/UserLogo.tsx";
import {useAppStore} from "../../utils/state-management/useAppStore.ts";
import CatalogCategories from "./components/CatalogCategories/CatalogCategories.tsx";

export function Header() {
    const {isCatalogOpen, setIsCatalogOpen} = useAppStore();

    return (
        <>
            <HeaderLayout>
                <Logo>{LOGO_NAME}</Logo>
                <CatalogButton
                    onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                />
                <CategoriesInput />
                <AddButton />
                <AdditionalButtons />
                <UserLogo />
            </HeaderLayout>
            {isCatalogOpen ? <CatalogCategories /> : null}
        </>
    );
}