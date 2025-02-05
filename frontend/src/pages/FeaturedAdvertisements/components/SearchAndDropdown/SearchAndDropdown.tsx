import TitleWithDropdown from "./SearchAndDropdownLayout.tsx";
import Dropdown from "../../../../common-components/Dropdown/Dropdown.tsx";
import {Title} from "../../../../common-components/Title/Title.tsx";

type Props = {
    filters: string[],
}

export default function SearchAndDropdown({ filters }: Props) {
    return (
        <TitleWithDropdown>
            <Title text={"Обрані оголошення"} size={"2xl"} />
            <div className={"h-full ml-auto"}>
                <Dropdown size={16} categories={filters}/>
            </div>
        </TitleWithDropdown>
    );
};