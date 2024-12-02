import CategoriesInputLayout from "./CategoriesInputLayout.tsx";
import CategoriesDropdown from "./components/CategoriesDropdown.tsx";
import CategoriesInputForm from "./components/CategoriesInputForm.tsx";

export function CategoriesInput() {
    return (
        <CategoriesInputLayout>
            <CategoriesDropdown />
            <CategoriesInputForm />
        </CategoriesInputLayout>
    );
};