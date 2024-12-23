import SearchAndDropdownLayout from "./SearchAndDropdownLayout.tsx";
import Dropdown from "../../../../common-components/Dropdown/Dropdown.tsx";

type Props = {
    filters: string[],
}

export default function SearchAndDropdown({ filters }: Props) {
    return (
        <SearchAndDropdownLayout>
            <Dropdown size={16} categories={filters}/>
        </SearchAndDropdownLayout>
    );
};