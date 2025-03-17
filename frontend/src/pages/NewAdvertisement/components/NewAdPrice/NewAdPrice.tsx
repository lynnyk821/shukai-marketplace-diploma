import NewAdPriceLayout from "./NewAdPriceLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import PriceInput from "./components/PriceInput.tsx";
import {CreateNewAdvertisementRequest} from "../../../../types/new-advertisement/create-new-advertisement-request.ts";

type Props = {
    register: UseFormRegister<CreateNewAdvertisementRequest>;
    error?: string;
};

export function NewAdPrice({ register, error }: Props) {
    return (
        <NewAdPriceLayout>
            <NewAdvertisementsTitle title="Вкажіть ціну" />
            <PriceInput
                error={error}
                register={register}
            />
        </NewAdPriceLayout>
    );
}