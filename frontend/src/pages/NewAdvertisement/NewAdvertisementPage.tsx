import AddProductLayout from "./NewAdvertisementPageLayout.tsx";
import NewProductPictures from "../../common-components/Advertisement/NewProductPictures/NewProductPictures.tsx";
import {useForm} from "react-hook-form";
import SubmitButton from "../../common-components/Advertisement/SubmitButton/SubmitButton.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {adSchema} from "../../utils/schemas/ad-schema.ts";
import {NewProductTitle} from "../../common-components/Advertisement/NewProductName/NewProductTitle.tsx";
import NewProductCategory from "../../common-components/Advertisement/AdvertisementCategory/NewProductCategory.tsx";
import AdRegion from "../../common-components/Advertisement/Region/AdRegion.tsx";
import NewProductDescription from "../../common-components/Advertisement/NewProductDescription/NewProductDescription.tsx";
import {PriceInput} from "../../common-components/Advertisement/PriceInput/PriceInput.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {AdRequest} from "../../types/request/ad-request.ts";
import {handleImageDelete, handleImageUpload} from "../../utils/helpers/helpers.ts";
import {useUserStore} from "../../utils/store/useUserStore.ts";
import {TokenManager} from "../../utils/helpers/tokenManager.ts";
import {axiosInstance} from "../../utils/axios/interceptors.ts";

export default function NewAdvertisementPage() {
    const {user} = useUserStore();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, trigger, formState: {errors} } = useForm<AdRequest>({
        resolver: zodResolver(adSchema),
        defaultValues: {
            title: "",
            categoryId: -1,
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
        if (user?.id) setValue("userId", user.id);
    }, [user]);

    const onSubmit = async (body: AdRequest) => {
        try {
            await axiosInstance.post(`/catalogue-service/api/catalogue/private`, body, {
                headers: {
                    Authorization: `Bearer ${TokenManager.getAccessToken()}`
                }
            });
            navigate("/home")
        } catch (error) {
            console.error("POST error:", error);
        }
    };

    return (
        <AddProductLayout>
            <form className={"w-full h-fit"} onSubmit={handleSubmit(onSubmit)}>
                <NewProductPictures
                    photos={watch("images")}
                    onImageUpload={(file, index) => handleImageUpload(file, index, setValue, watch)}
                    onImageDelete={(index) => handleImageDelete(index, setValue, watch)}
                    error={errors.images?.message}
                />
                <NewProductTitle register={register} error={errors.title?.message} />
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
                <SubmitButton type={"submit"}>Опублікувати оголошення</SubmitButton>
            </form>
        </AddProductLayout>
    );
};