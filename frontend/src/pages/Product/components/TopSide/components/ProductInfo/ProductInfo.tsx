import ProductInfoLayout from "./ProductInfoLayout.tsx";
import ProductName from "./components/ProductName/ProductName.tsx";
import Seller from "./components/Seller/Seller.tsx";
import DateInfo from "./components/DateInfo/DateInfo.tsx";
import BuyAndFavoriteButton from "./components/BuyAndCartButton/BuyAndFavoriteButton.tsx";
import MessageBox from "./components/MessageBox/MessageBox.tsx";
import PriceAndFavoriteButton from "./components/PriceAndFavoriteButton/PriceAndFavoriteButton.tsx";

export default function ProductInfo() {
    return (
        <ProductInfoLayout>
            <DateInfo date={"14 грудня 2024 р."} />
            <ProductName name={"2к квартира поруч із Майданом та Софією, вул. Мала Житомирська, 17 'fb; opdfbj bgnf"} />
            <PriceAndFavoriteButton />
            <BuyAndFavoriteButton />
            <Seller />
            <MessageBox placeholder={"Написати повідомлення продавцю..."} />
        </ProductInfoLayout>
    );
};