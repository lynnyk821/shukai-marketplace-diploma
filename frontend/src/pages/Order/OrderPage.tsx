import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OrderPageLayout from "./OrderPageLayout.tsx";
import { CommonTitle } from "../../common-components/Titles/MainTitle/CommonTitle.tsx";
import AdvertisementInfo from "./components/AdvertisementInfo/AdvertisementInfo.tsx";
import DeliveryMethod from "./components/DeliveryMethod/DeliveryMethod.tsx";
import PaymentMethod from "./components/PaymnetMethod/PaymentMethod.tsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.tsx";
import RightPanelWithDetails from "./components/RightPanelWithDetails/RightPanelWithDetails.tsx";
import { orderSchema } from "../../utils/schemas/order-schema.ts";
import {useLocation} from "react-router-dom";
import {OrderRequest} from "../../types/request/order-request.ts";
import {useEffect} from "react";

export function OrderPage() {
    const location = useLocation();
    const { item } = location.state || {};

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<OrderRequest>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            userInfo: {
                firstName: "",
                lastName: "Линник",
                middleName: "Ігорович",
                phoneNumber: ""
            },
            adInfo: {
                sellerName: item?.sellerName || "",
                adName: item?.name || "",
                price: item?.price || 0,
            },
            paymentMethod: "safe",
            deliveryMethod: {
                service: "novaposhta",
                city: "",
                warehouse: ""
            }
        }
    });

    useEffect(() => {
        if (item) {
            setValue("adInfo.sellerName", item.sellerName);
            setValue("adInfo.adName", item.name);
            setValue("adInfo.price", item.price);

            setValue("deliveryMethod.service", "novaposhta");
            setValue("deliveryMethod.city", "Черкаси");
            setValue("deliveryMethod.warehouse", "Відділення 12, вул. Молоткова 20");
        }
    }, [item, setValue]);

    const onSubmit = (data: OrderRequest) => {
        console.log("Форма відправлена:", data);
        console.log("hui")
    };

    return (
        <OrderPageLayout>
            <form
                className="w-3/4 h-full space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CommonTitle size="2xl" text="Оформлення замовлення" />
                <AdvertisementInfo seller={"Yaroslav"} adName={"ZARA Дублянка, куртка байкерська з овчини"} />
                <DeliveryMethod register={register} />
                <PaymentMethod register={register} />
                <ContactInfo register={register} errors={errors} />

                <button
                    type="submit"
                    className="bg-black text-white p-4 w-full rounded font-inter font-bold hover:bg-gray-800"
                >
                    Оформити замовлення
                </button>

                <p className="text-sm text-center text-gray-600 font-inter">
                    Натискаючи «Оформити замовлення», я погоджуюсь з Публічним договором
                </p>
            </form>
            <RightPanelWithDetails />
        </OrderPageLayout>
    );
}