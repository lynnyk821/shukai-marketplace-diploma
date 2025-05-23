type Props = {
    price: number
};

export default function Price({price}: Props) {
    return (
        <p className={"text-[#414141] text-xl font-monserrat font-bold"}>
            {price} грн.
        </p>
    );
};