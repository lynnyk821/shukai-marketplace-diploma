import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "./components/Logo/Logo.tsx";
import {LOGO_NAME} from "../../globals-env.ts";
import CatalogButton from "./components/CatalogButton/CatalogButton.tsx";
import {HeaderInputWithDropdown} from "./components/HeaderInputWithCategories/HeaderInputWithDropdown.tsx";
import AddButton from "./components/AddButton/AddButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogo from "./components/UserLogo/UserLogo.tsx";

export function Header() {
    return (
        <HeaderLayout>
            <Logo>{LOGO_NAME}</Logo>
            <CatalogButton></CatalogButton>
            <HeaderInputWithDropdown></HeaderInputWithDropdown>
            <AddButton></AddButton>
            <AdditionalButtons></AdditionalButtons>
            <UserLogo></UserLogo>
        </HeaderLayout>
    );
};