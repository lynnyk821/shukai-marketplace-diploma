import {CategoryItemProps} from "../../../../../../../types/common/category-item-props.ts";
import {useAppStore} from "../../../../../../../utils/hooks/useAppStore.ts";
import {useNavigate} from "react-router-dom";

export default function CategoryItem({name, color}: CategoryItemProps) {
    const {setIsCatalogueOpen} = useAppStore();
    const navigate = useNavigate();

    return (
        <button
            className={"h-full w-full centered text-center flex-col gap-3 hover:bg-gray-100"}
            onClick={() => {
                setIsCatalogueOpen(false);
                navigate(`/search?category=${name}`);
            }}
        >
            <div
                className={"h-16 w-16 centered rounded-full"}
                style={{ backgroundColor: color, userSelect: "none" }}
            >
                {name[0]}
            </div>
            <p className={"text-sm font-monserrat"}>{name}</p>
        </button>
    );
};