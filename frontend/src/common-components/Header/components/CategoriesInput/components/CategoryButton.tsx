import {MyButtonProps} from "../../../../../types/my-button-props.ts";
import {SEARCH_CATEGORIES} from "../../../../../globals-env.ts";
import {Icon} from "@iconify/react";

type Props = MyButtonProps & {
    isOpen: boolean,
    selectedCategory: string | null,
}

export function CategoryButton({selectedCategory, isOpen, onClick}: Props) {
    return (
        <button
            className={
                "h-full w-44 rounded-l-[8px] flex " +
                "border-r-[1px] border-solid border-[#eee] bg-white cursor-pointer"
            }
            onClick={onClick}
        >
            <div className={"w-4/5 h-full flex items-center px-2"}>
                <p
                    className={"font-montserrat text-[14px]"}
                    style={{userSelect: "none"}}
                >
                    {selectedCategory || SEARCH_CATEGORIES[0]}
                </p>
            </div>
            <div className={"w-1/5 h-full centered"}>
                <div className={"w-full h-2/3 flex items-center justify-center border-style-l"}>
                    <Icon
                        className={`text-[#414141] transition duration-300 ease-in-out 
                            ${isOpen ? " text-opacity-60"    : " text-opacity-30"}`
                        }
                        icon="iconamoon:arrow-down-2-bold"
                        width="23" height="23"
                    />
                </div>
            </div>
        </button>
    );
};