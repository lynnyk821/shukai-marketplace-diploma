type Props = {
    size: "sm" | "md" | "lg" | "xl";
    price: number
};

export default function ProductPrice({size, price}: Props) {
    return (
        <p className={`w-full h-1/5 text-left text-[#414141] text-opacity-90 font-inter font-bold ${
            size === "sm" ? "text-lg" : "text-xl"
        }`}>
            {price + " грн."}
        </p>
    );
};