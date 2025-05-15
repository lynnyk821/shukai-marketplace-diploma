import CategoryItem from "./CategoryItem.tsx";
import {CategoryDTO} from "../../../../../types/common/category-dto.ts";
import {COLORS} from "../../../../../globals-env.ts";
import {useAppStore} from "../../../../../utils/hooks/useAppStore.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    items: Array<CategoryDTO>;
};

export default function CategoriesGrid({ items }: Props) {
    const { setIsCatalogueOpen } = useAppStore();
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-full grid grid-cols-8 place-items-center gap-x-1 bg-white overflow-hidden"
        >
            {items.map((item, index) => (
                <CategoryItem
                    key={index}
                    name={item.name}
                    color={COLORS[index % 9].code}
                    onClick={() => {
                        setIsCatalogueOpen(false);
                        navigate(`/search?category=${item.name}`);
                    }}
                />
            ))}
        </div>
    );
};