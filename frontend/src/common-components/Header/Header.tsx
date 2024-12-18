import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "../Logo/Logo.tsx";
import CatalogButton from "./components/CatalogButton/CatalogButton.tsx";
import {InputWithCategories} from "./components/InputWithCategories/InputWithCategories.tsx";
import AddButton from "./components/AddButton/AddButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogoButton from "./components/UserLogoButton/UserLogoButton.tsx";

export function Header() {
    return (
        <HeaderLayout>
            <Logo></Logo>
            <CatalogButton />
            <InputWithCategories />
            <AddButton />
            <AdditionalButtons />
            <UserLogoButton />
        </HeaderLayout>
    );
}