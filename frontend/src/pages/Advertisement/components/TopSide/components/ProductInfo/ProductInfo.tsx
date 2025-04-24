import ProductInfoLayout from "./ProductInfoLayout.tsx";
import ProductName from "./components/ProductName/ProductName.tsx";
import Seller from "./components/Seller/Seller.tsx";
import DateInfo from "./components/DateInfo/DateInfo.tsx";
import BuyAndCartButton from "./components/BuyAndCartButton/BuyAndCartButton.tsx";
import PriceButton from "./components/PriceButton/PriceButton.tsx";
import {AdvertisementProps} from "../../../../../../types/common/advertisement-props.ts";
import AddToFavoriteButton from "./components/AddToFavoriteButton/AddToFavoriteButton.tsx";

type Props = {
    advertisement: AdvertisementProps;
}

export default function ProductInfo({advertisement}: Props) {
    return (
        <ProductInfoLayout>
            <DateInfo date={advertisement.createdAt} />
            <ProductName name={advertisement.name} />
            <PriceButton price={advertisement.price} />
            <BuyAndCartButton advertisement={advertisement} />
            <AddToFavoriteButton favorites={advertisement.favoritesCount} />
            <Seller
                user={advertisement.user}
                region={advertisement.region.cityName}
            />
        </ProductInfoLayout>
    );
};