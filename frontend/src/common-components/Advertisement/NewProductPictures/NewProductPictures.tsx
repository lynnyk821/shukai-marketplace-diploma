import NewProductPicturesLayout from "./NewProductPicturesLayout.tsx";
import BigPicture from "./components/BigPicture/BigPicture.tsx";

import { useState, useRef } from "react";
import PicturesGridItem from "./components/PicturesGrid/PicturesGridItem.tsx";

type Props = {
    photos: Array<string>,
    onImageUpload: (file: File, index: number) => Promise<void>,
    onImageDelete: (index: number) => void;
    error?: string;
}

export default function NewProductPictures({ photos, onImageUpload, onImageDelete, error}: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleFileSelect = (index: number) => {
        setSelectedIndex(index);
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            await onImageUpload(file, selectedIndex);
        }
    };

    const photoCount = (photos: string[]) => {
        return photos.filter((photo) => photo !== "").length;
    };

    return (
        <NewProductPicturesLayout
            photoCount={photoCount(photos)}
            error={error}
        >
            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />

            <BigPicture
                photo={photos[0]}
                onClick={() => handleFileSelect(0)}
                onDelete={() => onImageDelete(0)}
            />

            <ul className={"w-2/3 h-full grid grid-cols-4 gap-3"}>
                {photos.slice(1).map((photo, index) => (
                    <PicturesGridItem
                        key={index}
                        photo={photo}
                        onClick={() => handleFileSelect(index + 1)}
                        onDelete={() => onImageDelete(index + 1)}
                    />
                ))}
            </ul>
        </NewProductPicturesLayout>
    );
}