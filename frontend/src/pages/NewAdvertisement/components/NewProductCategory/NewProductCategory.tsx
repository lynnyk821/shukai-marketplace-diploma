import NewProductCategoryLayout from "./NewProductCategoryLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {NewAdCategoriesGrid} from "./components/NewAdCategoriesGrid.tsx";
import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import {CreateNewAdvertisementRequest} from "../../../../types/new-advertisement/create-new-advertisement-request.ts";

type Props = {
    currentCategory: string,
    setValue: UseFormSetValue<CreateNewAdvertisementRequest>,
    trigger: UseFormTrigger<CreateNewAdvertisementRequest>,
    error?: string,
};

export default function NewProductCategory({ setValue, currentCategory, trigger, error }: Props) {
    const handleSelectCategory = async (category: string) => {
        setValue("category", category, { shouldValidate: true }); // Оновлюємо значення та запускаємо валідацію
        await trigger("category"); // Перевіряємо валідність поля
    };

    return (
        <NewProductCategoryLayout>
            <NewAdvertisementsTitle title="Виберіть категорію" />
            <NewAdCategoriesGrid
                selectedCategory={currentCategory}
                onSelectCategory={handleSelectCategory}
                error={error}
            />
        </NewProductCategoryLayout>
    );
}