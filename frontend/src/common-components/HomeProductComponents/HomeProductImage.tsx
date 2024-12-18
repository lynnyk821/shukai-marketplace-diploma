type Props = {
    size: "sm" | "lg",
    image: string | undefined,
};

export default function HomeProductImage({ size, image }: Props) {
    return (
        <div
            className={`w-full h-[12rem] flex justify-center items-center overflow-hidden rounded-lg bg-[#eee] ${
                size === "sm" ? "h-[12rem]" : "h-[13rem]"
            }`}
        >
            <img className={"w-full h-full object-cover"} src={image} alt={"product"}/>
        </div>
    );
};