import { UseFormRegister } from "react-hook-form";
import {CreateNewAdvertisementRequest} from "../../../types/new-advertisement/create-new-advertisement-request.ts";

type Props = {
    type?: string,
    placeholder?: string;
    value?: string | number; // Додано для контролю значення
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Додано для ручного керування
    register?: UseFormRegister<CreateNewAdvertisementRequest>; // Опціональний, бо може використовуватися без react-hook-form
    fieldName?: keyof CreateNewAdvertisementRequest; // Опціональний, якщо не використовується register
    error?: string,
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export default function NewAdvertisementInput({
                                                  value,
                                                  type,
                                                  onChange,
                                                  onFocus,
                                                  placeholder,
                                                  fieldName,
                                                  register,
                                                  error,
                                              }: Props) {
    // Якщо передано register, використовуємо його
    const registerProps = register && fieldName ? register(fieldName) : {};

    return (
        <div className="w-full h-20">
            <input
                className={
                    "w-full p-4 rounded-md outline-none " +
                    "hover:border-yellow-600 focus:border-yellow-600 transition duration-300 ease-in-out " +
                    "text-[#414141] font-inter " +
                    "placeholder:font-monserrat placeholder:text-sm " +
                    "border border-solid border-[#414141] border-opacity-30"
                }
                type={type}
                onFocus={onFocus}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...registerProps} // Додаємо реєстрацію react-hook-form
            />
            {error && <span className="text-red-500 text-sm mt-3 block">{error}</span>}
        </div>
    );
}
