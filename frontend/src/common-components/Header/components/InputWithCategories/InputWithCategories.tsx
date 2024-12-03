import InputWithCategoriesLayout from "./InputWithCategoriesLayout.tsx";
import CategoriesDropdown from "./components/CategoriesDropdown.tsx";
import InputWithCategoriesForm from "./components/InputWithCategoriesForm.tsx";

export function InputWithCategories() {
    return (
        <InputWithCategoriesLayout>
            <CategoriesDropdown />
            <InputWithCategoriesForm />
        </InputWithCategoriesLayout>
    );
};