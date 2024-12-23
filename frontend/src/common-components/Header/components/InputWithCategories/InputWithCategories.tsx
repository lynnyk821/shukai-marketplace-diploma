import InputWithCategoriesLayout from "./InputWithCategoriesLayout.tsx";
import InputWithCategoriesForm from "./components/InputWithCategoriesForm.tsx";
import Dropdown from "../../../Dropdown/Dropdown.tsx";
import {SEARCH_CATEGORIES} from "../../../../globals-env.ts";

export function InputWithCategories() {
    return (
        <InputWithCategoriesLayout>
            <Dropdown size={11} categories={SEARCH_CATEGORIES} />
            <InputWithCategoriesForm />
        </InputWithCategoriesLayout>
    );
};