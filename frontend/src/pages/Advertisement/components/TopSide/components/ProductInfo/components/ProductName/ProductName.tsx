type Props = {
    name: string;
};

export default function ProductName({name}: Props) {
    return (
        <p className={"w-full text-[#414141] text-xl font-inter font-medium mt-6"}>{name}</p>
    );
};