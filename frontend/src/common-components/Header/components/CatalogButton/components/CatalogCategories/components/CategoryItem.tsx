import {CategoryItemProps} from "../../../../../../../types/category-item-props.ts";

export default function CategoryItem({name, color}: CategoryItemProps) {
    return (
        <button className={
            "h-full w-full centered text-center flex-col gap-3 " +
            "hover:bg-gray-100 "
        }>
            <div
                className={"h-16 w-16 centered rounded-full"}
                style={{
                    backgroundColor: color,
                    userSelect: "none",
                }}
            >
                {name[0]}
            </div>
            <p className={"text-sm font-monserrat"}>{name}</p>
        </button>
    );
};