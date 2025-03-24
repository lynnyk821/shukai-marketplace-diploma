import {CategoryDTO} from "../../../../../types/common/category-dto.ts";

export default function SubCategoriesPanel({ categories }: { categories: CategoryDTO[] }) {
    return (
        <div className="absolute top-full left-0 w-[800px] bg-white shadow-lg p-4 grid grid-cols-4 gap-4 z-20">
            {categories.map((subCategory) => (
                <div key={subCategory.id} className="p-2 hover:bg-gray-100">
                    <span className="text-sm">{subCategory.name}</span>
                    {subCategory.children.length > 0 && (
                        <div className="ml-4 mt-2">
                            {subCategory.children.map((child) => (
                                <div key={child.id} className="text-xs py-1">
                                    {child.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};