import SellerLayout from "./SellerLayout.tsx";
import SellerPictureButton from "./components/SellerPictureButton.tsx";
import SellerStats from "./components/SellerStats.tsx";
import SellerName from "./components/SellerName.tsx";

export default function Seller() {
    return (
        <SellerLayout>
            <SellerPictureButton />
            <div className={"flex flex-col gap-1"}>
                <SellerName name={"Lia"} />
                <SellerStats />
            </div>
        </SellerLayout>
    );
};