import ProductInfoLayout from "./ProductInfoLayout.tsx";
import ProductName from "./components/ProductName/ProductName.tsx";
import Seller from "./components/Seller/Seller.tsx";
import DateInfo from "./components/DateInfo/DateInfo.tsx";
import BuyAndFavoriteButton from "./components/BuyAndCartButton/BuyAndFavoriteButton.tsx";
import MessageBox from "./components/MessageBox/MessageBox.tsx";
import PriceAndFavoriteButton from "./components/PriceAndFavoriteButton/PriceAndFavoriteButton.tsx";
import {Advertisement} from "../../../../../../types/advertisement/advertisement.ts";

type Props = {
    advertisement: Advertisement;
}

export default function ProductInfo({advertisement}: Props) {
    return (
        <ProductInfoLayout>
            <DateInfo
                date={String(advertisement.createdAt)}
            />
            <ProductName
                name={advertisement.name}
            />
            <PriceAndFavoriteButton
                price={advertisement.price}
                favorites={advertisement.favoritesCount}
            />
            <BuyAndFavoriteButton />
            <Seller />
            <MessageBox placeholder={"Написати повідомлення продавцю..."} />
        </ProductInfoLayout>
    );
};