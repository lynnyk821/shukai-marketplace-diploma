type Props = {
    image: string,
    size: "sm" | "md" | "lg" | "xl"
};

export default function ProductImage({ image, size }: Props) {
    return (
        <div className={`w-full ${size === "sm" ? "h-3/4" : "h-4/5"} flex justify-center items-center overflow-hidden rounded-lg`}>
            <img
                className={`w-full h-full ${size !== "sm" && "object-cover object-center scale-105"}`}
                src={image}
                alt="product"
            />
        </div>
    );
};