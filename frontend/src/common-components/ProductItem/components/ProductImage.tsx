type Props = {
    image: string,
    size: "sm" | "md" | "lg" | "xl"
};

export default function ProductImage({ image, size }: Props) {
    return (
        <div className={`w-full ${size === "sm" ? "h-3/4" : "h-3/5"} flex justify-center items-center overflow-hidden rounded-lg bg-[#eee]`}>
            <img className={"w-full h-full object-cover"} src={image} alt={"product"} />
        </div>
    );
};