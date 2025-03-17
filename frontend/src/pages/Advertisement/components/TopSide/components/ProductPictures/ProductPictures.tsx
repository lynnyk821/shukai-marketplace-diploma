import ProductPicturesLayout from "./ProductPicturesLayout.tsx";
import BigProductPicture from "./components/BigProductPicture.tsx";
import ProductPicturesList from "./components/ProductPicturesList.tsx";
import {useState} from "react";

type Props = {
    pictures: string[],
}

export default function ProductPictures({pictures}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <ProductPicturesLayout>
            <BigProductPicture
                data={pictures}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <ProductPicturesList
                data={pictures}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </ProductPicturesLayout>
    );
};