import AdditionalButtonsLayout from "./AdditionalButtonsLayout.tsx";
import CartButton from "./components/CartButton.tsx";
import FavoriteButton from "./components/FavoriteButton.tsx";
import MessageButton from "./components/MessageButton.tsx";

export default function AdditionalButtons() {
    return (
        <AdditionalButtonsLayout>
            <MessageButton></MessageButton>
            <FavoriteButton></FavoriteButton>
            <CartButton></CartButton>
        </AdditionalButtonsLayout>
    );
};