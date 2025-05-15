import NewAdPriceLayout from "./PriceInputLayout.tsx";
import NewAdvertisementsTitle from "../../Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import {UseFormRegister} from "react-hook-form";
import Input from "./components/Input.tsx";
import {AdRequest} from "../../../types/request/ad-request.ts";

type Props = {
    register: UseFormRegister<AdRequest>;
    error?: string;
};

export function PriceInput({ register, error }: Props) {
    return (
        <NewAdPriceLayout>
            <NewAdvertisementsTitle title="Вкажіть ціну" />
            <Input
                error={error}
                register={register}
            />
        </NewAdPriceLayout>
    );
}