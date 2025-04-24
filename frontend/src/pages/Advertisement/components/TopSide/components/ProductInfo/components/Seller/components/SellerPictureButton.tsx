import noImage from "../../../../../../../../../assets/jpg/no-image.jpg"

type Props = {
    id: number,
    image: string,
}

export default function SellerPictureButton({id, image}: Props) {
    return (
        <button
            className={"w-12 h-12 overflow-hidden centered rounded-full bg-[#eee]"}
            style={{userSelect: "none"}}
            onClick={() => console.log(id)}
        >
            <img src={image ? image : noImage} alt={"user"} />
        </button>
    );
};