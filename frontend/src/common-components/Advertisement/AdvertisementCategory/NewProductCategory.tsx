import NewProductCategoryLayout from "./NewProductCategoryLayout.tsx";
import NewAdvertisementsTitle from "../../Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {NewAdCategoriesGrid} from "./components/NewAdCategoriesGrid.tsx";
import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import {AdRequest} from "../../../types/request/ad-request.ts";

type Props = {
    categoryId: number;
    setValue: UseFormSetValue<AdRequest>,
    trigger: UseFormTrigger<AdRequest>,
    error?: string,
};

export default function NewProductCategory({ categoryId, setValue, trigger, error }: Props) {
    const handleSelectCategory = async (category: number) => {
        setValue("categoryId", category, { shouldValidate: true });
        await trigger("categoryId");
    };

    return (
        <NewProductCategoryLayout>
            <NewAdvertisementsTitle title="Виберіть категорію" />
            <NewAdCategoriesGrid
                categoryId={categoryId}
                onHandle={handleSelectCategory}
                error={error}
            />
        </NewProductCategoryLayout>
    );
}