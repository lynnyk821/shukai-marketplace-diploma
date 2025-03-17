import {UseFormRegister} from "react-hook-form";
import {NewAdvertisementFormProps} from "../../../../../types/new-advertisement/new-advertisement-form-props.ts";

type Props = {
    placeholder?: string;
    register?: UseFormRegister<NewAdvertisementFormProps>;
    error?: string;
};

export default function PriceInput({ placeholder = "Введіть ціну", register, error }: Props) {
    const registerProps = register ? register("price", { valueAsNumber: true }) : {};

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Дозволяємо лише цифри (0-9), Backspace, Tab, стрілки
        if (!/[0-9]/.test(e.key) &&
            e.key !== "Backspace" && e.key !== "Tab" &&
            e.key !== "ArrowLeft" && e.key !== "ArrowRight"
        ) {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full">
            <input
                placeholder={placeholder}
                className={
                    "w-full p-4 rounded-md outline-none " +
                    "hover:border-yellow-600 focus:border-yellow-600 transition duration-300 ease-in-out " +
                    "text-[#414141] font-inter " +
                    "border border-solid border-[#414141] border-opacity-30"
                }
                onChange={(e) => e.currentTarget.value.trim() === "" ? 0 : e.target.value}
                onKeyDown={handleKeyDown}
                {...registerProps}
            />

            {error && (
                <span className="text-red-500 text-sm mt-2 block">{error}</span>
            )}
        </div>
    );
};