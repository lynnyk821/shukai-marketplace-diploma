import {CategoryItemProps} from "../../../../../../../types/common/category-item-props.ts";
import CategoryItem from "./CategoryItem.tsx";

type Props = {
    items: CategoryItemProps[],
}

export default function CategoriesGrid({items}: Props) {
    return (
        <div className={"w-full h-full grid grid-cols-8 place-items-center bg-white overflow-hidden"}>
            {items.map((item, key) => (
                <CategoryItem
                    key={key}
                    name={item.name}
                    color={item.color}
                    onClick={item.onClick}
                />
            ))}
        </div>
    );
};