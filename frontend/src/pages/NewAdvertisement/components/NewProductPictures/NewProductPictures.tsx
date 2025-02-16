import NewProductPicturesLayout from "./NewProductPicturesLayout.tsx";
import PicturesGrid from "./components/PicturesGrid/PicturesGrid.tsx";
import BigPicture from "./components/BigPicture/BigPicture.tsx";

export default function NewProductPictures() {
    return (
        <NewProductPicturesLayout>
            <BigPicture></BigPicture>
            <PicturesGrid></PicturesGrid>
        </NewProductPicturesLayout>
    );
};