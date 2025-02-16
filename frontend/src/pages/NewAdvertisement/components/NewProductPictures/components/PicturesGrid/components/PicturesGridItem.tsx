import {Icon} from "@iconify/react";

export default function PicturesGridItem() {
    return (
        <button className={
            "flex flex-col centered gap-2 " +
            "text-[#414141] text-opacity-90 " +
            "hover:text-yellow-600 transition duration-300 ease-in-out " +
            "border border-dashed border-[#414141] border-opacity-35 rounded-lg"}
        >
            <Icon icon="material-symbols-light:add-a-photo-outline" width="36" height="36" />
            <p className={"font-monserrat font-medium text-sm"}>Завантажте фото</p>
        </button>
    );
};