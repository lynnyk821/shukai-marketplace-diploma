import InputWithCategoriesLayout from "./InputWithCategoriesLayout.tsx";
import HeaderInput from "./components/HeaderInput.tsx";
import SearchButton from "./components/SearchButton.tsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

export function InputWithCategories() {
    const navigate = useNavigate();

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            query: "",
        },
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const valueParam = params.get("value");
        if(valueParam) setValue("query", valueParam);
    }, []);

    const onSubmit = (data: { query: string }) => {
        const params = new URLSearchParams(window.location.search);

        if(data.query) {
            params.set("value", data.query);
        } else {
            params.delete("value");
        }

        navigate(`/search?${params.toString()}`);
    };

    return (
        <InputWithCategoriesLayout>
            <form
                className={
                    "h-full w-full centered bg-white rounded-lg relative " +
                    "border-t-[1px] border-b-[1px] border-[1px] border-solid border-[#414141] border-opacity-30"
                }
                onSubmit={handleSubmit(onSubmit)}
            >
                <HeaderInput
                    control={control}
                    placeholder={"Я шукаю на шукаю на шукаю на шукаю на шукаю..."}
                />
                <SearchButton />
            </form>
        </InputWithCategoriesLayout>
    );
};