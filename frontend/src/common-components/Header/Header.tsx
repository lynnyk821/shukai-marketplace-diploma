import {HeaderLayout} from "./HeaderLayout.tsx";
import {Logo} from "../Logo/Logo.tsx";
import CategoryButton from "../Dropdown/CategoriesDropdown/CategoryButton.tsx";
import {InputWithCategories} from "./components/InputWithCategories/InputWithCategories.tsx";
import AddProductButton from "./components/AddProductButton/AddProductButton.tsx";
import AdditionalButtons from "./components/AdditionalButtons/AdditionalButtons.tsx";
import UserLogoButton from "./components/UserLogoButton/UserLogoButton.tsx";
import {useCart} from "../../utils/hooks/useCart.ts";
import {useEffect} from "react";
import {useAppStore} from "../../utils/hooks/useAppStore.ts";

type Props = {
    isFixed?: boolean;
}

export function Header({ isFixed }: Props) {
    const { setCartCapacity } = useAppStore();
    const { cart } = useCart();

    useEffect(() => {
        setCartCapacity(cart.length)
    }, [cart])

    return (
        <HeaderLayout isFixed={isFixed}>
            <Logo></Logo>
            <CategoryButton />
            <InputWithCategories />
            <AddProductButton />
            <AdditionalButtons />
            <UserLogoButton />
        </HeaderLayout>
    );
}