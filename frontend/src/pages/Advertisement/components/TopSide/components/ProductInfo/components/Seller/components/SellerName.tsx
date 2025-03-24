type Props = {
    id: number,
    name: string,
}

export default function SellerName({id, name}: Props) {
    return (
        <button className={
            "w-fit text-xl text-[#414141] font-monserrat font-medium " +
            "hover:text-yellow-600 transition duration-200 ease-in-out cursor-pointer"}
            onClick={() => console.log(id)}
        >
            {name}
        </button>);
};