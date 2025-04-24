type Props = {
    image: string,
};

export default function OrderImage({image}: Props) {
    return (
        <img
            src={image}
            alt={"logo"}
            className="w-20 h-20 object-cover rounded-md"
        />
    );
};