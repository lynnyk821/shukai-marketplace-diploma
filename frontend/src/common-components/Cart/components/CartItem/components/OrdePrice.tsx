type Props = {
    price: number,
};

export default function OrderPrice({ price }: Props) {
    return (
        <ul className="h-full w-36 gap-x-4 font-inter text-[12px]">
            <li className="h-full flex flex-col gap-2 justify-center p-2">
                <p className="text-[#8e8e8e]">Ціна</p>
                <span className="text-[#414141] font-inter text-[13px] font-medium">{price} грн</span>
            </li>
        </ul>
    );
};