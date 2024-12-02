import { useForm } from "react-hook-form";
import { headerInputOnSubmit } from "../../../../../utils/handlers/form-handlers.ts";
import HeaderInput from "./HeaderInput.tsx";
import SearchButton from "./SearchButton.tsx";

export default function CategoriesInputForm() {
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
            <HeaderInput control={control} placeholder={"Я шукаю на шукаю на шукаю..."}/>
            <SearchButton />
        </form>
    );
}