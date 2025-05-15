import BuyButton from "./components/BuyButton.tsx";
import BuyAndCartButtonLayout from "./BuyAndCartButtonLayout.tsx";
import AddToCartButton from "./components/AddToCartButton.tsx";
import {AdvertisementProps} from "../../../../../../../../types/common/advertisement-props.ts";

type Props = {
    advertisement: AdvertisementProps;
}

export default function BuyAndCartButton({advertisement}: Props) {
    return (
        <BuyAndCartButtonLayout>
            <BuyButton advertisement={advertisement} />
            <AddToCartButton advertisement={advertisement} />
        </BuyAndCartButtonLayout>
    );
};