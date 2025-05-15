import { useNavigate, useParams } from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {adSchema} from "../../../utils/schemas/ad-schema.ts";
import {useEffect} from "react";
import axios from "axios";
import {AdByIdResponse} from "../../../types/response/ad-by-id-response.ts";
import { handleImageDelete, handleImageUpload } from "../../../utils/helpers/helpers.ts";
import {BACKEND_URL} from "../../../globals-env.ts";
import EditAdvertisementPageLayout from "./EditAdvertisementPageLayout.tsx";
import NewProductPictures from "../../../common-components/Advertisement/NewProductPictures/NewProductPictures.tsx";
import {NewProductTitle} from "../../../common-components/Advertisement/NewProductName/NewProductTitle.tsx";
import NewProductCategory from "../../../common-components/Advertisement/AdvertisementCategory/NewProductCategory.tsx";
import {PriceInput} from "../../../common-components/Advertisement/PriceInput/PriceInput.tsx";
import AdRegion from "../../../common-components/Advertisement/Region/AdRegion.tsx";
import NewProductDescription from "../../../common-components/Advertisement/NewProductDescription/NewProductDescription.tsx";
import SubmitButton from "../../../common-components/Advertisement/SubmitButton/SubmitButton.tsx";
import {AdRequest} from "../../../types/request/ad-request.ts";
import DeleteButton from "../../../common-components/Advertisement/DeleteButton/DeleteButton.tsx";

export default function EditAdvertisementPage() {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setValue, trigger, formState: { errors }} = useForm<AdRequest>({
        resolver: zodResolver(adSchema),
        defaultValues: {
            title: "",
            categoryId: 0,
            price: 0,
            images: Array(9).fill(""),
            region: {
                ref: "",
                regionName: "",
                cityName: "",
                description: "",
            },
            description: "",
            userId: -1,
            deliveryMethodIds: [1, 2],
            paymentMethodIds: [1, 3]
        },
    });

    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const response = await axios.get<AdByIdResponse>(
                    `http://localhost:8080/catalogue-service/api/catalogue/${id}`
                );
                const ad = response.data.advertisement;
                console.log(ad);
                setValue("title", ad.title);
                setValue("price", ad.price);
                setValue("images", Array(9).fill("").map((_, i) => ad.images?.[i] || ""));
                setValue("categoryId", ad.category.id)
                setValue("region.description", "м. " + ad.region.cityName);
                console.log(ad.region.description);
                setValue("description", ad.description);
                setValue("userId", ad.user.id);
                setValue("deliveryMethodIds", [1, 2]);
                setValue("paymentMethodIds", [1, 3]);
            } catch (err) {
                console.error("Помилка запиту:", err);
            }
        };
        fetchAdvertisement()
    }, [id]);

    const onSubmit = async (data: AdRequest) => {
        try {
            await axios.patch(`${BACKEND_URL}/catalogue-service/api/catalogue/${id}`, data);
            navigate("/my/ads");
        } catch (err) {
            console.error("Ошибка при обновлении объявления:", err);
        }
    };

    return (
        <EditAdvertisementPageLayout>
            <form className={"w-full"}
                  onSubmit={handleSubmit(onSubmit)}
            >
                <NewProductPictures
                    photos={watch("images")}
                    onImageUpload={(file, index) => handleImageUpload(file, index, setValue, watch)}
                    onImageDelete={(index) => handleImageDelete(index, setValue, watch)}
                    error={errors.images?.message}
                />
                <NewProductTitle
                    value={watch("title")}
                    register={register}
                    error={errors.title?.message}
                />
                <NewProductCategory
                    categoryId={watch("categoryId")}
                    setValue={setValue}
                    trigger={trigger}
                    error={errors.categoryId?.message}
                />
                <div className={"grid grid-cols-2 gap-10"}>
                    <PriceInput register={register} error={errors.price?.message} />
                    <AdRegion
                        setValue={setValue}
                        region={watch("region")}
                        trigger={trigger}
                        error={errors.region?.message}
                    />
                </div>
                <NewProductDescription register={register} error={errors.description?.message} />
                <div className={"w-full h-16 flex gap-6 justify-end"}>
                    <SubmitButton type={"submit"}>Опублікувати оголошення</SubmitButton>
                    <DeleteButton>Видалити</DeleteButton>
                </div>
            </form>
        </EditAdvertisementPageLayout>
    );
};