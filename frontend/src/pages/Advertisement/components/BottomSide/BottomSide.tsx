import BottomSideLayout from "./BottomSideLayout.tsx";
import ProductDescription from "./components/ProductDescription/ProductDescription.tsx";
import DeliveryAndPayment from "./components/DeliveryAndPayment/DeliveryAndPayment.tsx";
import AdditionalSellerProducts from "./components/AdditionalSellerProducts/AdditionalSellerProducts.tsx";
import {Advertisement} from "../../../../types/advertisement/advertisement.ts";

type Props = {
    advertisement: Advertisement;
}

export default function BottomSide({advertisement} : Props) {
    const products = ["1", "2", "3", "4", "5", "6"];

    return (
        <BottomSideLayout>
            <div className={"w-full h-fit flex gap-10"}>
                <ProductDescription
                    description={advertisement.description}
                />
                <DeliveryAndPayment
                    paymentMethods={advertisement.paymentMethods}
                    deliveryMethods={advertisement.deliveryMethods}
                />
            </div>
            <AdditionalSellerProducts
                title={"Ще оголошення цього продавця"}
                products={products}
            />
        </BottomSideLayout>
    );
};