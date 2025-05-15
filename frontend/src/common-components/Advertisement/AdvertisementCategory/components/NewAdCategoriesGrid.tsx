import NewAdCategoryItem from "./NewAdCategoryItem.tsx";
import {useFetchCategories} from "../../../../utils/hooks/useFetchCategories.ts";
import {COLORS} from "../../../../globals-env.ts";
import {useEffect, useState} from "react";
import {CategoryDTO} from "../../../../types/common/category-dto.ts";

type Props = {
    onHandle: (categoryId: number) => void,
    error?: string
    categoryId: number,
};

export function NewAdCategoriesGrid({ categoryId, onHandle, error }: Props) {
    const { data: categories, isLoading } = useFetchCategories();
    const [selectedCategory, setSelectedCategory] = useState<number>(categoryId);

    useEffect(() => {
        setSelectedCategory(categoryId);
    }, [categoryId]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={"w-full h-80"}>
            <div className={"w-full h-72 grid grid-cols-8 place-items-center bg-white overflow-hidden"}>
                {categories.map((item: CategoryDTO, key) => (
                    <NewAdCategoryItem
                        key={key}
                        name={item.name}
                        color={COLORS[key % 9].code}
                        isSelected={selectedCategory === item.id}
                        onClick={() => {
                            onHandle(item.id);
                                setSelectedCategory(item.id);
                        }}
                    />
                ))}
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}