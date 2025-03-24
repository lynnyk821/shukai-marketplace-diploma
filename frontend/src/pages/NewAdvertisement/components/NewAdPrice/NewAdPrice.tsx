import NewAdPriceLayout from "./NewAdPriceLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import PriceInput from "./components/PriceInput.tsx";
import {CreateAdRequest} from "../../../../types/request/create-ad-request.ts";

type Props = {
    register: UseFormRegister<CreateAdRequest>;
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