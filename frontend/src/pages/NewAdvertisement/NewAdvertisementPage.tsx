import AddProductLayout from "./NewAdvertisementPageLayout.tsx";
import NewProductPictures from "./components/NewProductPictures/NewProductPictures.tsx";
import {useForm} from "react-hook-form";
import SubmitButton from "../../common-components/Buttons/SubmitButton/SubmitButton.tsx";
import {convertToBase64} from "../../utils/helpers/helpers.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {newAdSchema} from "../../utils/schemas/new-ad-schema.ts";
import {NewProductName} from "./components/NewProductName/NewProductName.tsx";
import NewProductCategory from "./components/NewProductCategory/NewProductCategory.tsx";
import AdRegion from "./components/NewAdRegion/AdRegion.tsx";
import NewProductDescription from "./components/NewProductDescription/NewProductDescription.tsx";
import {NewAdPrice} from "./components/NewAdPrice/NewAdPrice.tsx";
import {CreateAdRequest} from "../../types/request/create-ad-request.ts";
import axios from "axios";

export default function NewAdvertisementPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        formState: {errors}
    } = useForm<CreateAdRequest>({
        resolver: zodResolver(newAdSchema),
        defaultValues: {
            name: "",
            categoryId: 0,
            price: 0,
            images: Array(9).fill(""),
            region: {
                regionName: "",
                cityName: "",
                description: "",
            },
            description: "",
            userId: 1,
            deliveryMethodIds: [1, 2],
            paymentMethodIds: [1, 3]
        },
    });

    const handleImageUpload = async (file: File, index: number) => {
        const base64 = await convertToBase64(file);
        const currentPhotos = [...watch("images")];
        currentPhotos[index] = base64;
        setValue("images", currentPhotos, { shouldValidate: true });
    };

    const handleImageDelete = (index: number) => {
        const newPhotos = [...watch("images")];
        newPhotos[index] = "";
        setValue("images", newPhotos, { shouldValidate: true });
    };

    const onSubmit = async (
        body: CreateAdRequest,
    ) => {
        try {
            await axios.post("http://localhost:8080/catalogue-service/api/catalogue", body);
        } catch (error) {
            console.log(body)
            console.error("POST error:", error);
        }
    };

    return (
        <AddProductLayout>
            <form
                className={"w-full h-fit"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <NewProductPictures
                    photos={watch("images")}
                    onImageUpload={handleImageUpload}
                    onImageDelete={handleImageDelete}
                    error={errors.images?.message}
                />

                <NewProductName
                    register={register}
                    error={errors.name?.message}
                />

                <NewProductCategory
                    setValue={setValue}
                    trigger={trigger}
                    error={errors.categoryId?.message}
                />

                <div className={"grid grid-cols-2 gap-10"}>
                    <NewAdPrice
                        register={register}
                        error={errors.price?.message}
                    />

                    <AdRegion
                        setValue={setValue}
                        region={watch("region")}
                        trigger={trigger}
                        error={errors.region?.message}
                    />

                </div>

                <NewProductDescription
                    register={register}
                    error={errors.description?.message}
                />

                <SubmitButton type={"submit"}>
                    Опублікувати оголошення
                </SubmitButton>
            </form>
        </AddProductLayout>
    );
};