import DescriptionText from "./components/DescriptionText.tsx";
import NewProductDescriptionLayout from "./NewProductDescriptionLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import {CreateNewAdvertisementRequest} from "../../../../types/new-advertisement/create-new-advertisement-request.ts";

type Props = {
    register: UseFormRegister<CreateNewAdvertisementRequest>;
    error?: string;
};

export default function NewProductDescription({ register, error }: Props) {
    return (
        <NewProductDescriptionLayout>
            <NewAdvertisementsTitle title="Опис" />
            <DescriptionText error={error} register={register} />
        </NewProductDescriptionLayout>
    );
}