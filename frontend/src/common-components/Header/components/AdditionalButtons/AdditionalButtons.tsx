import AdditionalButtonsLayout from "./AdditionalButtonsLayout.tsx";
import CartButton from "./components/CartButton.tsx";
import FavoriteButton from "./components/FavoriteButton.tsx";
import MessageButton from "./components/MessageButton.tsx";
import {useNavigateWithScrollBehavior} from "../../../../utils/hooks/useNavigateWithScrollBehavior.ts";

export default function AdditionalButtons() {
    return (
        <AdditionalButtonsLayout>
            <MessageButton
                onClick={useNavigateWithScrollBehavior("/messages", "smooth")}
            />
            <FavoriteButton
                onClick={useNavigateWithScrollBehavior("/favorites", "smooth")}
            />
            <CartButton />
        </AdditionalButtonsLayout>
    );
};