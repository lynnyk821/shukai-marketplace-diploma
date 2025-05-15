import {truncateStringWithN} from "../../../utils/helpers/helpers.ts";

type Props = {
    size: "sm" | "md" | "lg" | "xl",
    name: string,
}

export default function ProductName({ size, name }: Props) {
    return (
        <p className={`w-full h-1/5 font-inter font-medium my-2 text-left 
            ${size === "sm" && " text-sm"} 
            ${size === "md" && " text-[16px]"} 
            ${size === "lg" && " text-lg"}
            ${size === "xl" && " text-xl"}`
        }>
            {size === "sm" && truncateStringWithN(name, 20)}
            {size === "md" && truncateStringWithN(name, 30)}
            {size === "lg" && truncateStringWithN(name, 40)}
            {size === "xl" && truncateStringWithN(name, 50)}
        </p>
    );
};