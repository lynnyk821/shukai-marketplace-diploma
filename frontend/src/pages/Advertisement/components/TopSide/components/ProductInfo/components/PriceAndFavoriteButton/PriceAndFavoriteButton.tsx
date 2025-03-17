import Price from "./components/Price.tsx";
import PriceAndFavoriteButtonLayout from "./PriceAndFavoriteButtonLayout.tsx";
import AddToFavoriteButton from "./components/AddToFavoriteButton.tsx";

type Props = {
    price: number,
    favorites: number,
}

export default function PriceAndFavoriteButton({ favorites, price }: Props) {
    return (
        <PriceAndFavoriteButtonLayout>
            <Price price={price} />
            <AddToFavoriteButton favorites={favorites} />
        </PriceAndFavoriteButtonLayout>
    );
};