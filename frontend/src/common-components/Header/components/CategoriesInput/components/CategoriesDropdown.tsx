import { useState } from "react";
import { SEARCH_CATEGORIES } from "../../../../../globals-env.ts";
import { useClickOutside } from "../../../../../utils/hooks/useClickOutside.ts";
import {DropdownList} from "./DropdownList.tsx";
import {CategoryButton} from "./CategoryButton.tsx";

export default function CategoriesDropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const dropdownRef = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false);
    });

    return (
        <div className={"h-full relative z-50"} ref={dropdownRef}>
            <CategoryButton
                isOpen={isOpen}
                selectedCategory={selectedCategory}
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <DropdownList
                    items={SEARCH_CATEGORIES}
                    selectedItem={selectedCategory}
                    onClick={(item) => {
                        setSelectedCategory(item);
                        setIsOpen(false);
                    }}
                />
            )}
        </div>
    );
}
