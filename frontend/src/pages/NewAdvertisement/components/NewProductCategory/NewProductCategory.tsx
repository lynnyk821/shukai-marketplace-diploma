import NewProductCategoryLayout from "./NewProductCategoryLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {NewAdCategoriesGrid} from "./components/NewAdCategoriesGrid.tsx";
import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import {CreateAdRequest} from "../../../../types/request/create-ad-request.ts";

type Props = {
    setValue: UseFormSetValue<CreateAdRequest>,
    trigger: UseFormTrigger<CreateAdRequest>,
    error?: string,
};

export default function NewProductCategory({ setValue, trigger, error }: Props) {
    const handleSelectCategory = async (category: number) => {
        setValue("categoryId", category, { shouldValidate: true });
        await trigger("categoryId");
    };

    return (
        <NewProductCategoryLayout>
            <NewAdvertisementsTitle title="Виберіть категорію" />
            <NewAdCategoriesGrid
                onSelectCategory={handleSelectCategory}
                error={error}
            />
        </NewProductCategoryLayout>
    );
}