import ProductPicturesLayout from "./ProductPicturesLayout.tsx";
import BigProductPicture from "./components/BigProductPicture.tsx";
import ProductPicturesList from "./components/ProductPicturesList.tsx";
import {useState} from "react";
import noImage from "../../../../../../assets/jpg/no-image.jpg";
import image2 from "../../../../../../assets/jpeg/shukai_3.jpeg"

export default function ProductPictures() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        noImage, noImage, noImage, noImage,
        image2, noImage, noImage, noImage];

    return (
        <ProductPicturesLayout>
            <BigProductPicture
                data={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <ProductPicturesList
                data={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </ProductPicturesLayout>
    );
};