import DropdownLayout from "./DropdownLayout.tsx";
import {SelectedItem} from "./SelectedItem/SelectedItem.tsx";
import {useEffect, useState} from "react";
import {useClickOutside} from "../../utils/hooks/useClickOutside.ts";
import {DropdownListItems} from "./DropdownListItems/DropdownListItems.tsx";
import SlideDown from "../../utils/animations/SlideDown.tsx";

type Props = {
    size: number,
    categories: string[],
    selectedValue?: string,
    onChange: (value: string) => void,
}

export default function Dropdown({selectedValue, size, categories, onChange}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>(selectedValue || "");

    const dropdownRef = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false);
    });

    useEffect(() => {
        setSelectedCategory(selectedValue || "");
    }, [selectedValue]);

    return (
        <DropdownLayout size={size} ref={dropdownRef}>
            <SelectedItem
                size={size}
                isOpen={isOpen}
                categories={categories}
                selectedCategory={selectedCategory}
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <SlideDown bottom={-30} duration={0.5} isOpen={isOpen} opacity={0}>
                    <DropdownListItems
                        items={categories}
                        selectedItem={selectedCategory}
                        onClick={(item: string) => {
                            onChange(item)
                            setSelectedCategory(item);
                            setIsOpen(false);
                        }}
                    />
                </SlideDown>
            )}
        </DropdownLayout>
    );
};