import {truncateStringWithN} from "../../utils/helpers/helpers.ts";

type Props = {
    size: "sm" | "lg";
    name: string;
};

export default function HomeProductName({ size, name }: Props) {
    return (
        <p
            className={`w-full font-inter font-medium mt-3 text-left ${
                size === "sm" ? "h-10 text-sm" : "h-12 text-[16px]"
            }`}
        >
            {size === "lg" ? truncateStringWithN(name, 40) : truncateStringWithN(name, 30)}
        </p>
    );
}
