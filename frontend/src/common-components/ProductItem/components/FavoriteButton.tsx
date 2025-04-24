import {Icon} from "@iconify/react";

export default function FavoriteButton() {
    return (
        <div className={"ml-auto flex items-center"}>
            <button
                className={"hover:text-yellow-600 transition duration-300 ease-in-out"}
            >
                <Icon icon="proicons:heart" width="24" height="24" />
            </button>
        </div>
    );
};