type Props = {
    image: string,
};

export default function MessageProductPicture({image}: Props) {
    return (
        <li className={"w-16 h-full centered"}>
            <div className={"w-full h-full centered rounded-lg bg-sky-200"}>
                {image}
            </div>
        </li>
    );
};