import {CATALOG_CATEGORIES} from "../../../../../globals-env.ts";
import NewAdCategoryItem from "./NewAdCategoryItem.tsx";

type Props = {
    selectedCategory: string;
    onSelectCategory: (category: string) => void,
    error?: string
};

export function NewAdCategoriesGrid({ selectedCategory, onSelectCategory, error }: Props) {
    return (
        <div className={"w-full h-80"}>
            <div className={"w-full h-72 grid grid-cols-8 place-items-center bg-white overflow-hidden"}>
                {CATALOG_CATEGORIES.map((item, key) => (
                    <NewAdCategoryItem
                        key={key}
                        name={item.name}
                        color={item.color}
                        isSelected={selectedCategory === item.name} // Передаємо стан вибраної категорії
                        onClick={() => onSelectCategory(item.name)}
                    />
                ))}
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}