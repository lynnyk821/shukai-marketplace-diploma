import BottomSideLayout from "./BottomSideLayout.tsx";
import ProductDescription from "./components/ProductDescription/ProductDescription.tsx";
import DeliveryAndPayment from "./components/DeliveryAndPayment/DeliveryAndPayment.tsx";
import AdditionalSellerProducts from "./components/AdditionalSellerProducts/AdditionalSellerProducts.tsx";
import {AdByIdResponse} from "../../../../types/response/ad-by-id-response.ts";
import {useEffect} from "react";

type Props = {
    data: AdByIdResponse;
}

export default function BottomSide({data} : Props) {
    useEffect(() => {

    }, []);

    return (
        <BottomSideLayout>
            <div className={"w-full h-fit flex gap-10"}>
                <ProductDescription
                    description={data.advertisement.description}
                />
                <DeliveryAndPayment
                    paymentMethods={data.advertisement.paymentMethods}
                    deliveryMethods={data.advertisement.deliveryMethods}
                />
            </div>
            <AdditionalSellerProducts
                title={"Ще оголошення цього продавця"}
                products={data.moreAdvertisements}
            />
        </BottomSideLayout>
    );
};