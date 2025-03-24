import {NewProductNameLayout} from "./NewProductNameLayout.tsx";
import NewAdvertisementsTitle from "../../../../common-components/Titles/NewAdvertisementTitle/NewAdvertisementsTitle.tsx";
import NewAdvertisementInput from "../../../../common-components/Inputs/NewAdvertisementInput/NewAdvertisementInput.tsx";
import {UseFormRegister} from "react-hook-form";
import {CreateAdRequest} from "../../../../types/request/create-ad-request.ts";

type Props = {
    register: UseFormRegister<CreateAdRequest>,
    error?: string,
}

export function NewProductName({ register, error }: Props) {
    return (
        <NewProductNameLayout>
            <NewAdvertisementsTitle title="Назва" />
            <NewAdvertisementInput
                type={"text"}
                fieldName="name"
                register={register}
                placeholder="Наприклад: Вимикач. Книга 3"
                error={error}
            />
        </NewProductNameLayout>
    );
}