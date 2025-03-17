import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "../Logo/Logo.tsx";
import CategoryButton from "./components/CategoryButton/CategoryButton.tsx";
import {InputWithCategories} from "./components/InputWithCategories/InputWithCategories.tsx";
import AddProductButton from "./components/AddProductButton/AddProductButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogoButton from "./components/UserLogoButton/UserLogoButton.tsx";

export function Header() {
    return (
        <HeaderLayout>
            <Logo></Logo>
            <CategoryButton />
            <InputWithCategories />
            <AddProductButton />
            <AdditionalButtons />
            <UserLogoButton />
        </HeaderLayout>
    );
}