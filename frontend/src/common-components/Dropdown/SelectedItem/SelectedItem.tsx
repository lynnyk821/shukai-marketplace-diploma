import {MyButtonProps} from "../../../types/common/my-button-props.ts";
import {Icon} from "@iconify/react";
import SelectedItemLayout from "./SelectedItemLayout.tsx";

type Props = MyButtonProps & {
    size: number,
    isOpen: boolean,
    categories: string[],
    selectedCategory: string | null,
}

export function SelectedItem({selectedCategory, size, categories, isOpen, onClick}: Props) {
    return (
        <SelectedItemLayout size={size} onClick={onClick}>
            <div className={"w-4/5 h-full flex items-center px-2"}>
                <p
                    className={"font-montserrat text-sm text-[#414141]"}
                    style={{userSelect: "none"}}
                >
                    {selectedCategory || categories[0]}
                </p>
            </div>
            <div className={"w-1/5 h-full centered"}>
                <div className={
                    "w-full h-2/3 flex items-center justify-center " +
                    "border-l-[1px] border-solid border-[#414141] border-opacity-20"
                }>
                    <Icon
                        className={`text-[#414141] transition duration-300 ease-in-out 
                            ${isOpen ? " text-opacity-60" : " text-opacity-30"}`
                        }
                        icon="iconamoon:arrow-down-2-bold"
                        width="23" height="23"
                    />
                </div>
            </div>
        </SelectedItemLayout>
    );
};