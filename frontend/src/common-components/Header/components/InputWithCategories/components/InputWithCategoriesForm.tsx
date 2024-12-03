import { useForm } from "react-hook-form";
import { headerInputOnSubmit } from "../../../../../utils/handlers/form-handlers.ts";
import HeaderInput from "./HeaderInput.tsx";
import SearchButton from "./SearchButton.tsx";

export default function InputWithCategoriesForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            searchValue: "",
        },
    });

    return (
        <form
            className={
                "h-full w-72 centered bg-white rounded-r-lg relative " +
                "border-t-[1px] border-b-[1px] border-r-[1px] border-solid border-[#414141] border-opacity-30"
            }
            onSubmit={handleSubmit(headerInputOnSubmit)}
        >
            <HeaderInput control={control} placeholder={"Я шукаю на шукаю на шукаю..."}/>
            <SearchButton />
        </form>
    );
}