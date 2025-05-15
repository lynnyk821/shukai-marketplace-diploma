import {Icon} from "@iconify/react";
import {MyButtonProps} from "../../../../../types/help/my-button-props.ts";

type Props = MyButtonProps & {
    photo: string;
    onDelete: () => void; // Додано обробник видалення
};

export default function PicturesGridItem({ photo, onClick, onDelete }: Props) {
    return (
        <button
            className={
                "w-full flex flex-col centered gap-2 overflow-hidden " +
                "text-[#414141] text-opacity-90 " +
                "hover:text-yellow-600 transition duration-300 ease-in-out " +
                "border border-dashed border-[#414141] border-opacity-35 rounded-lg"
            }
            onClick={onClick}
        >
            {photo ? (
                <div className="relative w-full h-40">
                    <img src={photo} className="w-full h-full object-cover rounded-lg" alt={"gridItem"} />
                    <button
                        className="absolute bg-white top-2 right-2 p-1 rounded-full hover:bg-opacity-100 transition duration-150 ease-in-out"
                        onClick={(e) => {
                            e.stopPropagation(); // Зупиняємо подію, щоб не спрацьовував onClick батьківського елемента
                            onDelete();
                        }}
                    >
                        <Icon icon="material-symbols:close" width="18" height="18" />
                    </button>
                </div>
            ) : (
                <div className={"w-full h-full flex flex-col items-center justify-center gap-2"}>
                    <Icon icon="material-symbols-light:add-a-photo-outline" width="36" height="36" />
                    <p className={"font-monserrat font-medium text-sm"}>Завантажте фото</p>
                </div>
            )}
        </button>
    );
}