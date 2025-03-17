import AddProductLayout from "./NewAdvertisementPageLayout.tsx";
import NewProductPictures from "./components/NewProductPictures/NewProductPictures.tsx";
import {useForm} from "react-hook-form";
import SubmitButton from "../../common-components/Buttons/SubmitButton/SubmitButton.tsx";
import {convertToBase64} from "../../utils/helpers/helpers.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {newAdvertisementSchema} from "../../utils/schemas/new-advertisement-schema.ts";
import {NewProductName} from "./components/NewProductName/NewProductName.tsx";
import NewProductCategory from "./components/NewProductCategory/NewProductCategory.tsx";
import AdRegion from "./components/NewAdRegion/AdRegion.tsx";
import NewProductDescription from "./components/NewProductDescription/NewProductDescription.tsx";
import {NewAdPrice} from "./components/NewAdPrice/NewAdPrice.tsx";
import {CreateNewAdvertisementRequest} from "../../types/new-advertisement/create-new-advertisement-request.ts";
import axios from "axios";

export default function NewAdvertisementPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        formState: {errors}
    } = useForm<CreateNewAdvertisementRequest>({
        resolver: zodResolver(newAdvertisementSchema),
        defaultValues: {
            name: "",
            category: "",
            price: 0,
            photos: Array(9).fill(""),
            region: {
                regionName: "",
                cityName: "",
                description: "",
            },
            description: "",
            userId: 1,
            deliveryMethods: [1, 2],
            paymentMethods: [1, 3]
        },
    });

    const handleImageUpload = async (file: File, index: number) => {
        const base64 = await convertToBase64(file);
        const currentPhotos = [...watch("photos")];
        currentPhotos[index] = base64;
        setValue("photos", currentPhotos, { shouldValidate: true });
    };

    const handleImageDelete = (index: number) => {
        const newPhotos = [...watch("photos")];
        newPhotos[index] = "";
        setValue("photos", newPhotos, { shouldValidate: true });
    };

    const onSubmit = async (
        body: CreateNewAdvertisementRequest,
    ) => {
        try {
            await axios.post("http://localhost:8080/catalogue-service/api/catalogue", {
                // Ensure property names match backend expectations
                name: body.name,
                description: body.description,
                price: body.price,
                images: body.photos.filter(p => p !== ""),
                region: {
                    cityName: body.region.cityName,
                    regionName: body.region.regionName,
                    description: body.region.description,
                },
                userId: body.userId,
                categoryName: body.category,
                deliveryMethodIds: body.deliveryMethods,
                paymentMethodIds: body.paymentMethods
            });
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
                    photos={watch("photos")}
                    onImageUpload={handleImageUpload}
                    onImageDelete={handleImageDelete}
                    error={errors.photos?.message}
                />

                <NewProductName
                    register={register}
                    error={errors.name?.message}
                />

                <NewProductCategory
                    setValue={setValue}
                    currentCategory={watch("category")}
                    trigger={trigger}
                    error={errors.category?.message}
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