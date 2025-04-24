type Props = {
    size: "sm" | "md" | "lg" | "xl";
    price: number
};

export default function ProductPrice({size, price}: Props) {
    return (
        <p className={`text-[#414141] text-opacity-90 font-inter font-bold ${size === "sm" ? "text-sm" : "text-lg"}`}>
            {price + " грн"}
        </p>
    );
};