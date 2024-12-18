import ProductPictures from "./components/ProductPictures/ProductPictures.tsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.tsx";
import TopSideLayout from "./TopSideLayout.tsx";

export default function TopSide() {
    return (
        <TopSideLayout>
            <ProductPictures></ProductPictures>
            <ProductInfo></ProductInfo>
        </TopSideLayout>
    );
};