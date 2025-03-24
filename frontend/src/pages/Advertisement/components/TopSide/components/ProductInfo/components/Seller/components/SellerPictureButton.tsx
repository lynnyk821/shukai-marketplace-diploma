type Props = {
    id: number,
    image: string,
}

export default function SellerPictureButton({id, image}: Props) {
    return (
        <button
            className={"w-12 h-12 overflow-hidden rounded-full"}
            style={{userSelect: "none"}}
            onClick={() => console.log(id)}
        >
            <img src={image} alt={"user"} />
        </button>
    );
};