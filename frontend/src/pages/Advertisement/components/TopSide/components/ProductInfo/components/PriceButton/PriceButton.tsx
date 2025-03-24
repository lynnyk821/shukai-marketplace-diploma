import Price from "./components/Price.tsx";
import PriceButtonLayout from "./PriceButtonLayout.tsx";

type Props = {
    price: number,
}

export default function PriceButton({ price }: Props) {
    return (
        <PriceButtonLayout>
            <Price price={price} />
        </PriceButtonLayout>
    );
};