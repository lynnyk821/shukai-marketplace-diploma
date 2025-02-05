import BuyButton from "./components/BuyButton.tsx";
import BuyAndFavoriteButtonLayout from "./BuyAndFavoriteButtonLayout.tsx";
import AddToCartButton from "./components/AddToCartButton.tsx";

export default function BuyAndFavoriteButton() {
    return (
        <BuyAndFavoriteButtonLayout>
            <BuyButton />
            <AddToCartButton />
        </BuyAndFavoriteButtonLayout>
    );
};