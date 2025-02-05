type Props = {
    name: string,
}

export default function SellerName({name}: Props) {
    return (
        <p className={
            "w-fit text-xl text-[#414141] font-monserrat font-medium " +
            "hover:text-yellow-600 transition duration-200 ease-in-out cursor-pointer"}
        >
            {name}
        </p>);
};