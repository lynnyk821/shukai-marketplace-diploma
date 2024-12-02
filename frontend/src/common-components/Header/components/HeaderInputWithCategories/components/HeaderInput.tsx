import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputIcon from "./InputIcon.tsx";
import { headerInputOnSubmit } from "../../../../../utils/form-handlers.ts";

export default function HeaderInput() {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            searchValue: "",
        },
    });

    return (
        <form
            className="h-full w-72 centered bg-white rounded-r-lg relative"
            onSubmit={handleSubmit(headerInputOnSubmit)}
        >
            <div className="h-4/5 w-[85%] font-poppins">
                <Controller
                    name="searchValue"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            className={
                                "w-full h-full pl-3 font-montserrat text-[14px] focus:outline-none " +
                                "placeholder:font-montserrat placeholder:text-[14px] placeholder:text-sm " +
                                "placeholder:text-[#414141] placeholder:text-opacity-70"
                            }
                            placeholder="Я шукаю на шукаю на шукаю..."
                        />
                    )}
                />
            </div>
            <button
                type="submit"
                className="h-full w-[15%] centered"
                onMouseEnter={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
            >
                <InputIcon isFocused={isFocused} />
            </button>
        </form>
    );
}