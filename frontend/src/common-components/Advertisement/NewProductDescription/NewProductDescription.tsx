import DescriptionText from "./components/DescriptionText.tsx";
import NewProductDescriptionLayout from "./NewProductDescriptionLayout.tsx";
import NewAdvertisementsTitle from "../../Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import {AdRequest} from "../../../types/request/ad-request.ts";

type Props = {
    register: UseFormRegister<AdRequest>;
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