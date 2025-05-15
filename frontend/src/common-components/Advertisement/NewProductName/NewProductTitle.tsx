import {NewProductNameLayout} from "./NewProductNameLayout.tsx";
import NewAdvertisementsTitle from "../../Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import NewAdvertisementInput from "../../Inputs/NewAdvertisementInput/NewAdvertisementInput.tsx";
import {UseFormRegister} from "react-hook-form";
import {AdRequest} from "../../../types/request/ad-request.ts";

type Props = {
    value: string,
    register: UseFormRegister<AdRequest>,
    error?: string,
}

export function NewProductTitle({ value, register, error }: Props) {
    return (
        <NewProductNameLayout>
            <NewAdvertisementsTitle title="Назва" />
            <NewAdvertisementInput
                value={value}
                type={"text"}
                fieldName="title"
                register={register}
                placeholder="Наприклад: Вимикач. Книга 3"
                error={error}
            />
        </NewProductNameLayout>
    );
}