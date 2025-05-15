import BigPictureLayout from "./BigPictureLayout.tsx";
import {Icon} from "@iconify/react";
import {MyButtonProps} from "../../../../../types/help/my-button-props.ts";

type Props = MyButtonProps & {
    photo: string;
    onDelete: () => void; // Додано обробник видалення
};

export default function BigPicture({ photo, onClick, onDelete }: Props) {
    return (
        <BigPictureLayout onClick={onClick}>
            {photo ? (
                <div className="relative w-full h-full">
                    <img src={photo} className="w-full h-full object-cover rounded-lg" alt={"mainImg"} />
                    <div
                        className="absolute top-2 right-2 p-1 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100 transition duration-150 ease-in-out"
                        onClick={(e) => {
                            e.stopPropagation(); // Зупиняємо подію, щоб не спрацьовував onClick батьківського елемента
                            onDelete();
                        }}
                    >
                        <Icon icon="material-symbols:close" width="28" height="28" />
                    </div>
                </div>
            ) : (
                <div className={"w-full h-full flex flex-col justify-center items-center"}>
                    <Icon icon="material-symbols-light:add-a-photo-outline" width="44" height="44" />
                    <p className={"font-monserrat font-medium text-lg"}>Завантажте фото</p>
                </div>
            )}
        </BigPictureLayout>
    );
}