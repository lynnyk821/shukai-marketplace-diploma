import PicturesGridLayout from "./PicturesGridLayout.tsx";
import PicturesGridItem from "./components/PicturesGridItem.tsx";

export default function PicturesGrid() {
    const array = ["1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <PicturesGridLayout>
            {array.map(() =>
                <PicturesGridItem></PicturesGridItem>
            )}
        </PicturesGridLayout>
    );
};