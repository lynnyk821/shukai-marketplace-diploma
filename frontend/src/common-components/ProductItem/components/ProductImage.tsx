type Props = {
    image: string,
};

export default function ProductImage({ image }: Props) {
    return (
        <div className={"w-full h-3/5 flex justify-center items-center overflow-hidden rounded-lg bg-[#eee]"}>
            <img className={"w-full h-full object-cover"} src={image} alt={"product"} />
        </div>
    );
};