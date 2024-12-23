// @flow
import DropdownListItemsLayout from "./DropdownListItemsLayout.tsx";
import DropdownListItem from "./components/DropdownItem.tsx";

type Props = {
    items: string[],
    selectedItem: string,
    onClick: (item: string) => void,
};

export function DropdownListItems({items, selectedItem, onClick}: Props) {
    return (
        <DropdownListItemsLayout>
            {items.map(item => (
                <DropdownListItem
                    item={item}
                    selectedItem={selectedItem}
                    onClick={() => onClick(item)}
                />
            ))}
        </DropdownListItemsLayout>
    );
};