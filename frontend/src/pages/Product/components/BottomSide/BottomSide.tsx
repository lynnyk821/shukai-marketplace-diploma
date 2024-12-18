import BottomSideLayout from "./BottomSideLayout.tsx";
import ProductDescription from "./components/ProductDescription/ProductDescription.tsx";
import DeliveryAndPayment from "./components/DeliveryAndPayment/DeliveryAndPayment.tsx";
import AdditionalSellerProducts from "./components/AdditionalSellerProducts/AdditionalSellerProducts.tsx";

export default function BottomSide() {
    const products = ["1", "2", "3", "4", "5", "6"];

    return (
        <BottomSideLayout>
            <div className={"w-full h-fit flex gap-10"}>
                <ProductDescription />
                <DeliveryAndPayment />
            </div>
            <AdditionalSellerProducts
                title={"Ще оголошення цього продавця"}
                products={products}
            />
        </BottomSideLayout>
    );
};