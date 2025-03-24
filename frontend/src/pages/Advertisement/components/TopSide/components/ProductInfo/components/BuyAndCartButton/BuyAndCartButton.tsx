import BuyButton from "./components/BuyButton.tsx";
import BuyAndCartButtonLayout from "./BuyAndCartButtonLayout.tsx";
import AddToCartButton from "./components/AddToCartButton.tsx";

export default function BuyAndCartButton() {
    return (
        <BuyAndCartButtonLayout>
            <BuyButton />
            <AddToCartButton />
        </BuyAndCartButtonLayout>
    );
};