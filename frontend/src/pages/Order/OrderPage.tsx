import {Resolver, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OrderPageLayout from "./OrderPageLayout.tsx";
import { CommonTitle } from "../../common-components/Titles/MainTitle/CommonTitle.tsx";
import AdvertisementInfo from "./components/AdvertisementInfo/AdvertisementInfo.tsx";
import DeliveryMethod from "./components/DeliveryMethod/DeliveryMethod.tsx";
import PaymentMethod from "./components/PaymnetMethod/PaymentMethod.tsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.tsx";
import RightPanelWithDetails from "./components/RightPanelWithDetails/RightPanelWithDetails.tsx";
import { orderSchema } from "../../utils/schemas/order-schema.ts";
import {useLocation, useNavigate} from "react-router-dom";
import OrderSubmitButton from "./components/Submit/OrderSubmitButton.tsx";
import {OrderItem} from "../../types/common/order-item.ts";
import {OrderRequest} from "../../types/request/order-request.ts";
import {BACKEND_URL} from "../../globals-env.ts";
import {useEffect} from "react";
import {axiosInstance} from "../../utils/axios/interceptors.ts";

export function OrderPage() {
    const location = useLocation();
    const item  = ((location.state && 'item' in location.state) && location.state.item) as OrderItem;
    const navigate = useNavigate();

    const { register, setValue, handleSubmit, formState } = useForm<OrderRequest>({
        resolver: zodResolver(orderSchema) as Resolver<OrderRequest>,
        defaultValues: {
            customer: {
                firstName: "",
                lastName: "",
                middleName: "",
                phoneNumber: "",
            },
            delivery: {
                service: "Нова пошта",
                city: "м. Черкаси",
                warehouse: "Відділення 12, вул. молоткова 20"
            },
            advertisement: {
                id: "",
                title: "",
                image: "",
                price: 0,
                seller: "",
            },
            paymentMethod: "safe"
        },
    });

    useEffect(() => {
        if (item) {
            setValue("advertisement.id", item.advertisement?.id || "");
            setValue("advertisement.title", item.advertisement?.title || "");
            setValue("advertisement.image", item.advertisement?.image || "");
            setValue("advertisement.price", item.advertisement?.price || 0);
            setValue("advertisement.seller", item.advertisement?.seller || "");
        }
    }, [item, setValue]);

    const onSubmit = async (data: OrderRequest) => {
        try {
            await axiosInstance.post(`${BACKEND_URL}/order-service/api/orders`, data);
            navigate("/home")
        } catch (error) {
            console.error("POST error:", error);
        }
    };

    return (
        <OrderPageLayout>
            <form className="w-3/4 h-full space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
            >
                <CommonTitle size="2xl" text="Оформлення замовлення" />
                <AdvertisementInfo
                    seller={item.advertisement?.seller}
                    title={item.advertisement?.title}
                />
                <DeliveryMethod register={register} setValue={setValue} errors={formState.errors} />
                <PaymentMethod register={register} />
                <ContactInfo register={register} errors={formState.errors} />
                <OrderSubmitButton>Оформити замовлення</OrderSubmitButton>
            </form>
            <RightPanelWithDetails price={item.advertisement?.price} />
        </OrderPageLayout>
    );
}