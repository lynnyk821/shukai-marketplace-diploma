import CheckboxesDropdownLayout from "./CheckboxesDropdownLayout.tsx";
import {CommonTitle} from "../Titles/MainTitle/CommonTitle.tsx";
import AnimateRotation from "../../utils/animations/AnimateRotation.tsx";
import {Icon} from "@iconify/react";
import {useState} from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";

type Props = {
    title: string;
    options: string[];
    selectedValues: string[];
    onSelectionChange: (values: string[]) => void;
};

export default function CheckboxesDropdown({
   title, options,
   selectedValues, onSelectionChange
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (value: string, isChecked: boolean) => {
        const newValues = isChecked
            ? [...selectedValues, value]
            : selectedValues.filter((v) => v !== value);
        onSelectionChange(newValues);
    };

    return (
        <CheckboxesDropdownLayout>
            <button
                className="w-full h-full flex text-left items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <CommonTitle text={title} />
                <AnimateRotation className={"ml-auto"} degree={180} isActive={isOpen}>
                    <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20} />
                </AnimateRotation>
            </button>
            {isOpen && (
                <ul className="w-full space-y-2 mt-2">
                    {options.map((option) => (
                        <li key={option}>
                            <Checkbox
                                label={option}
                                checked={selectedValues.includes(option)}
                                onChange={(checked) => handleCheckboxChange(option, checked)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </CheckboxesDropdownLayout>
    );
}