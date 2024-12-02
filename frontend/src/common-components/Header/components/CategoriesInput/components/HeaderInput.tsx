import {Control, Controller} from "react-hook-form";

type Props = {
    control: Control<{searchValue:string}, "searchValue">
    placeholder: string,
};

export default function HeaderInput({control, placeholder}: Props) {
    return (
        <div className="h-4/5 w-[85%] font-poppins">
            <Controller name="searchValue" control={control} render={({field}) =>
                <input
                    className={
                    "w-full h-full pl-3 font-montserrat text-[14px] focus:outline-none " +
                    "placeholder:font-montserrat placeholder:text-[14px] placeholder:text-sm " +
                    "placeholder:text-[#414141] placeholder:text-opacity-70"
                }
                    placeholder={placeholder}
                    autoComplete={"off"}
                    {...field}
                />
            }/>
        </div>
    );
};

