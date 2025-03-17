import CheckboxLayout from "./CheckboxLayout.tsx";
import {Icon} from "@iconify/react";

interface Props {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: Props) {
    return (
        <CheckboxLayout>
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <div className="w-6 h-6 rounded-md border border-solid border-[#414141] border-opacity-20 centered bg-white shrink-0">
                {checked && (
                    <Icon
                        className="text-yellow-600"
                        icon="material-symbols:check"
                        width="20"
                        height="20"
                    />
                )}
            </div>
            <span className="text-[#414141] text-[16px] font-inter select-none">{label}</span>
        </CheckboxLayout>
    );
};