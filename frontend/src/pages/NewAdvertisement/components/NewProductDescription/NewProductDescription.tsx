import DescriptionText from "./components/DescriptionText.tsx";
import NewProductDescriptionLayout from "./NewProductDescriptionLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import {CreateAdRequest} from "../../../../types/request/create-ad-request.ts";

type Props = {
    register: UseFormRegister<CreateAdRequest>;
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