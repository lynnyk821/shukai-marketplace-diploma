import BigPictureLayout from "./BigPictureLayout.tsx";
import {Icon} from "@iconify/react";

export default function BigPicture() {
    return (
        <BigPictureLayout>
            <div className={
                "w-96 h-full flex flex-col centered rounded-lg gap-2 text-[#414141] text-opacity-90 " +
                "hover:text-yellow-600 transition duration-300 ease-in-out " +
                "border border-dashed border-[#414141] border-opacity-35" +
                ""
            }>
                <Icon icon="material-symbols-light:add-a-photo-outline" width="44" height="44" />
                <p className={"font-monserrat font-medium text-lg"}>Завантажте фото</p>
            </div>
        </BigPictureLayout>
    );
};