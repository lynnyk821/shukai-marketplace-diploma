import {Title} from "../../../../common-components/Title/Title.tsx";
import Dropdown from "../../../../common-components/Dropdown/Dropdown.tsx";
import TitleAndDropdownLayout from "./TitleAndDropdownLayout.tsx";

type Props = {
    filters: string[],
}

export default function TitleAndDropdown({ filters }: Props) {
    return (
        <TitleAndDropdownLayout>
            <Title text={"Результат пошуку"} size={"2xl"} />
            <div className={"h-full ml-auto"}>
                <Dropdown size={16} categories={filters}/>
            </div>
        </TitleAndDropdownLayout>
    );
};