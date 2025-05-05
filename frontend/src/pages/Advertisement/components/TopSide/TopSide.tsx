import ProductPictures from "./components/ProductPictures/ProductPictures.tsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.tsx";
import TopSideLayout from "./TopSideLayout.tsx";
import {AdvertisementProps} from "../../../../types/common/advertisement-props.ts";
import {useEffect} from "react";

type Props = {
    advertisement: AdvertisementProps;
}

export default function TopSide({advertisement}: Props) {
    useEffect(() => {
        console.log("Photos:", advertisement.images.length);
    }, [advertisement.title]);

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