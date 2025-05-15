import ProductPictures from "./components/ProductPictures/ProductPictures.tsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.tsx";
import TopSideLayout from "./TopSideLayout.tsx";
import {AdvertisementProps} from "../../../../types/common/advertisement-props.ts";

type Props = {
    advertisement: AdvertisementProps;
}

export default function TopSide({advertisement}: Props) {
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