type Props =  {
    items: string[],
    selectedItem: string | null,
    onClick: (item: string | null) => void,
};

export function DropdownList({selectedItem, items, onClick}: Props) {
    return (
        <ul className={
                "absolute w-full h-[13.5rem] left-0 top-12 rounded-l-xl overflow-auto z-10 " +
                "border-[1px] border-solid border-gray-300 bg-white "
            }
        >
            {items.map((item, key) => (
                <li className={`h-9 flex items-center px-2 font-montserrat text-[14px] cursor-pointer 
                        ${selectedItem === item ? "bg-gray-200" : "hover:bg-gray-100"}`
                    }
                    onClick={() => onClick(item)}
                    key={key}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};