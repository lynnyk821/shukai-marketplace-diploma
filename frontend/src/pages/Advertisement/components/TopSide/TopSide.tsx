import ProductPictures from "./components/ProductPictures/ProductPictures.tsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.tsx";
import TopSideLayout from "./TopSideLayout.tsx";
import {Advertisement} from "../../../../types/advertisement/advertisement.ts";
import {useEffect} from "react";

type Props = {
    advertisement: Advertisement;
}

export default function TopSide({advertisement}: Props) {
    useEffect(() => {
        console.log("Photos:", advertisement.images.length);
    }, [advertisement.name]);

    return (
        <TopSideLayout>
            <ProductPictures
                pictures={advertisement.images}
            />
            <ProductInfo
                advertisement={advertisement}
            />
        </TopSideLayout>
    );
};