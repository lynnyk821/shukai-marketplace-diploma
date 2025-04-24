import TitleWithDropdown from "./TitleAndDropdownLayout.tsx";
import Dropdown from "../../../../common-components/Dropdown/Dropdown.tsx";
import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = {
    filters: string[],
}

export default function TitleAndDropdown({ filters }: Props) {
    return (
        <TitleWithDropdown>
            <CommonTitle text={"Обрані оголошення"} size={"2xl"} />
            <div className={"h-full ml-auto"}>
                <Dropdown size={16} categories={filters}/>
            </div>
        </TitleWithDropdown>
    );
};