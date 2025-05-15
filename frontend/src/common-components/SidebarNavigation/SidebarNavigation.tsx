import CheckboxesDropdown from "../CheckboxesDropdown/CheckboxesDropdown.tsx";
import {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import SidebarNavigationLayout from "./SidebarNavigationLayout.tsx";

type Props = {
    options: string[];
    param: string;
    title: string;
};

export default function SidebarNavigation({ options, param, title }: Props) {
    const [selectedOption, setSelectedOption] = useState<string[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const value = params.get(param);
        if (value) setSelectedOption(value.split(","));
    }, [location.search, param]);

    const handleFilterChange = (values: string[]) => {
        const searchParams = new URLSearchParams(location.search);

        if (values.length > 0) {
            searchParams.set(param, values.join(","));
        } else {
            searchParams.delete(param);
        }

        navigate({
            pathname: location.pathname,
            search: `?${searchParams.toString()}`
        });
    };

    return (
        <SidebarNavigationLayout>
            <CheckboxesDropdown
                title={title}
                options={options}
                selectedValues={selectedOption}
                onSelectionChange={(values) => {
                    setSelectedOption(values);
                    handleFilterChange(values);
                }}
                isSingleSelect={true}
            />
        </SidebarNavigationLayout>
    );
}
