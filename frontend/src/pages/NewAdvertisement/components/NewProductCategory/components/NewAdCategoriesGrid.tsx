import NewAdCategoryItem from "./NewAdCategoryItem.tsx";
import {useFetchCategories} from "../../../../../utils/hooks/useFetchCategories.ts";
import {COLORS} from "../../../../../globals-env.ts";
import {useState} from "react";

type Props = {
    onSelectCategory: (category: number) => void,
    error?: string
};

export function NewAdCategoriesGrid({ onSelectCategory, error }: Props) {
    const { data: categories, isLoading } = useFetchCategories();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    if (error) return null;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={"w-full h-80"}>
            <div className={"w-full h-72 grid grid-cols-8 place-items-center bg-white overflow-hidden"}>
                {categories.map((item, key) => (
                    <NewAdCategoryItem
                        key={key}
                        name={item.name}
                        color={COLORS[key % 9].code}
                        isSelected={selectedCategory === item.name}
                        onClick={() => {
                            onSelectCategory(item.id);
                            setSelectedCategory(item.name);
                        }}
                    />
                ))}
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}