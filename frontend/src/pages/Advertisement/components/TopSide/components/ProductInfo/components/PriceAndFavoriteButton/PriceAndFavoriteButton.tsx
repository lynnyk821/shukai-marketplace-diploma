import Price from "./components/Price.tsx";
import PriceAndFavoriteButtonLayout from "./PriceAndFavoriteButtonLayout.tsx";
import AddToFavoriteButton from "./components/AddToFavoriteButton.tsx";

export default function PriceAndFavoriteButton() {
    return (
        <PriceAndFavoriteButtonLayout>
            <Price price={"255 грн"} />
            <AddToFavoriteButton />
        </PriceAndFavoriteButtonLayout>
    );
};