type Props = {
    price: number
};

export default function Price({price}: Props) {
    return (
        <p className={"text-[#414141] text-2xl font-bold my-10"}>{price}</p>
    );
};