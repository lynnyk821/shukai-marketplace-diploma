import { useState, useEffect } from "react";
import { z } from "zod";

const schema = z.number().max(99999999, "Число не повинно перевищувати 99999999");

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function PriceInput({ value, onChange, placeholder }: Props) {
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numValue = Number(inputValue);

        if (inputValue === "" || (!isNaN(numValue) && schema.safeParse(numValue).success)) {
            setInternalValue(inputValue);
        }
    };

    const handleBlur = () => {
        onChange(internalValue);
    };

    return (
        <input
            className={
                "w-1/3 p-2 text-center font-montserrat text-sm focus:outline-none " +
                "rounded-md border border-solid border-[#414141] border-opacity-30 " +
                "placeholder:font-montserrat placeholder:font-medium placeholder:text-[14px] " +
                "placeholder:text-[#414141]"
            }
            value={internalValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            autoComplete="off"
        />
    );
}