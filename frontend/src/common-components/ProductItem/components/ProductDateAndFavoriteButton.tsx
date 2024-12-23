import {Icon} from "@iconify/react";

type Props = {
    date: string;
};

export default function ProductDateAndFavoriteButton({date}: Props) {
    return (
        <div className={"w-full flex pb-4 relative flex-row"}>
            <p className={"w-full h-fit text-left text-sm font-monserrat"}>
                {date}
            </p>
            <button className={"absolute right-2 bottom-4 text-[#41414] hover:text-yellow-600 transition duration-300 ease-in-out"}>
                <Icon icon="proicons:heart" width="24" height="24" />
            </button>
        </div>
    );
};