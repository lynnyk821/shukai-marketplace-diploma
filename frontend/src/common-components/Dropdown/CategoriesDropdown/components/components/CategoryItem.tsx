import {MyButtonProps} from "../../../../../types/help/my-button-props.ts";

type Props = MyButtonProps & {
    name: string,
    color: string,
}

export default function CategoryItem({onClick, name, color}: Props) {
    return (
        <button
            className={"h-full w-full centered text-center flex-col hover:bg-gray-100"}
            onClick={onClick}
        >
            <div className={"h-3/4 w-full centered "}>
                <div
                    className={"h-14 w-14 centered rounded-full"}
                    style={{ backgroundColor: color, userSelect: "none" }}
                >
                    {name[0]}
                </div>
            </div>
            <div className={"h-20 w-full centered"}>
                <p className={"w-full h-full text-sm font-monserrat"}>{name}</p>
            </div>
        </button>
    );
};