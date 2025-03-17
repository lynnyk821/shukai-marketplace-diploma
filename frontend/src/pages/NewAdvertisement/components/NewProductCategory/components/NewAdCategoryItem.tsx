import {CategoryItemProps} from "../../../../../types/common/category-item-props.ts";

type Props = CategoryItemProps & {
    onClick: () => void;
    isSelected?: boolean;
};

export default function NewAdCategoryItem({ name, color, onClick, isSelected = false }: Props) {
    return (
        <button
            className={
                `h-full w-full centered text-center flex-col gap-3 
                hover:bg-gray-100 hover:rounded-lg transition duration-150 ease-in-out
                ${isSelected ? "bg-gray-100 rounded-lg" : ""}` // Виділення вибраної категорії
            }
            onClick={onClick}
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
}