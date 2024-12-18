export default function SellerPictureButton() {
    return (
        <button
            className={"w-12 h-12 overflow-hidden rounded-full"}
            style={{userSelect: "none"}}
        >
            <img src={"https://avatars.shafastatic.net/5721768_new_avatar_type1730823039"} alt={"user"} />
        </button>
    );
};