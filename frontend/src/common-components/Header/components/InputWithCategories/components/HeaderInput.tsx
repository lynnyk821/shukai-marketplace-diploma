import {Control, Controller} from "react-hook-form";

type Props = {
    control: Control<{query:string}, "query">,
    placeholder: string,
};

export default function HeaderInput({control, placeholder}: Props) {
    return (
        <div className="flex-1 font-poppins">
            <Controller name="query" control={control} render={({field}) =>
                <input
                    className={
                        "w-full h-full pl-4 font-montserrat text-[14px] focus:outline-none " +
                        "placeholder:font-montserrat placeholder:text-[14px] " +
                        "placeholder:text-[#414141] placeholder:text-opacity-70"
                    }
                    placeholder={placeholder}
                    {...field}
                />
            }/>
        </div>
    );
};

