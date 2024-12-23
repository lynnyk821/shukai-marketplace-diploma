import {truncateStringWithN} from "../../../utils/helpers/helpers.ts";

type Props = {
    size: "sm" | "md" | "lg" | "xl",
    name: string,
}

export default function ProductName({ size, name }: Props) {
    return (
        <p className={`w-full h-1/5 text-[#414141] font-inter font-medium my-2 text-left 
            ${size === "sm" ? " text-sm" : " text-lg"}`
        }>
            {size === "sm" && truncateStringWithN(name, 30)}
            {size === "md" && truncateStringWithN(name, 35)}
            {size === "lg" && truncateStringWithN(name, 40)}
            {size === "xl" && truncateStringWithN(name, 50)}
        </p>
    );
};