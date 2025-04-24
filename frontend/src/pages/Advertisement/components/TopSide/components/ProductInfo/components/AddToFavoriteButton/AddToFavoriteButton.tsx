import AddToFavoriteButtonLayout from "./AddToFavoriteButtonLayout.tsx";
import {Icon} from "@iconify/react";

type Props = {
    favorites: number,
}

export default function AddToFavoriteButton({favorites}: Props) {
    return (
        <AddToFavoriteButtonLayout>
            <div className={"flex items-center font-medium gap-1"}>
                {favorites}
                <Icon icon="bx:heart" width="20" height="20"/>
            </div>
            <p className={"font-medium"}>В обране</p>
        </AddToFavoriteButtonLayout>
    );
};