type Props = {
    price: number
};

export default function HomeProductPrice({price}: Props) {
    return (
        <p className={"w-full my-6 text-left text-xl text-[#414141] text-opacity-90 font-inter font-bold"}>
            {price + " грн."}
        </p>
    );
};