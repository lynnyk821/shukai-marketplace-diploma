import {MyButtonProps} from "../../../../types/my-button-props.ts";

type Props = MyButtonProps & {
    item: string,
    selectedItem: string,
    onClick: () => void,
};

export default function DropdownListItem({item, selectedItem, onClick}: Props) {
    return (
        <li className={`h-fit flex items-center p-3 font-montserrat text-sm cursor-pointer 
                        ${selectedItem === item ? "bg-gray-200" : "hover:bg-gray-100"}`
        }
            onClick={onClick}
        >
            {item}
        </li>
    );
};