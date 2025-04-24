import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import Dropdown from "../../../../common-components/Dropdown/Dropdown.tsx";
import TitleAndDropdownLayout from "./TitleAndDropdownLayout.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function TitleAndDropdown() {
    const filters = [
        { label: "Від новіших до старіших", value: "new_ads" },
        { label: "Від дорогих до дешевих", value: "price_desc" },
        { label: "Від дешевих до дорогих", value: "price_asc" },
    ];

    const [selectedItem, setSelectedItem] = useState<string>(filters[0].label);
    const navigate = useNavigate();

    const findValueByLabel = (label: string): string | undefined => {
        const found = filters.find((item) => item.label === label);
        return found ? found.value : undefined;
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sortByParam = params.get("sortBy");
        const found = filters.find((item) => item.value === sortByParam);
        if(found) setSelectedItem(found.label);
    }, []);

    const updateUrl = (label: string) => {
        const params = new URLSearchParams(window.location.search);
        const value = findValueByLabel(label);

        if (value) {
            params.set("sortBy", value);
            navigate({ search: params.toString() }, { replace: true });
        }
    };

    return (
        <TitleAndDropdownLayout>
            <CommonTitle text={"Результат пошуку"} size={"2xl"} />
            <div className={"h-full bg-amber ml-auto"}>
                <Dropdown
                    size={16}
                    categories={filters.map((item) => item.label)}
                    selectedValue={selectedItem}
                    onChange={updateUrl}
                />
            </div>
        </TitleAndDropdownLayout>
    );
};