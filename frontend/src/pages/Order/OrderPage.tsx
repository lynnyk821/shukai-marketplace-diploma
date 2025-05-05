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
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import OrderSubmitButton from "./components/Submit/OrderSubmitButton.tsx";
import {CartItemProps} from "../../types/common/cart-item-props.ts";
import {useAppStore} from "../../utils/hooks/useAppStore.ts";
import {OrderRequest} from "../../types/request/order-request.ts";

export function OrderPage() {
    const location = useLocation();
    const { item } = location.state || {};
    const { userMe } = useAppStore();

    const { register, setValue, handleSubmit, formState } = useForm<OrderRequest>({
        resolver: zodResolver(orderSchema) as Resolver<OrderRequest>,
        defaultValues: {
            seller: {
                id: userMe?.id || 0,
                name: item?.sellerName || ""
            },
            customer: {
                firstName: "",
                lastName: "",
                middleName: "",
                phoneNumber: ""
            },
            delivery: {
                service: "",
                city: "",
                warehouse: ""
            },
            advertisement: {
                title: item?.name || "",
                image: item?.image || "",
                price: item?.price || 0,
                paymentMethod: "safe"
            }
        },
    });

    useEffect(() => {
        const tItem = item as CartItemProps

        if (tItem) {
            setValue("seller.name", item.sellerName);
            setValue("advertisement.title", item.name);
            setValue("advertisement.price", item.price);
            setValue("advertisement.image", item.image);
        }
    }, [item, setValue]);

    const onSubmit = (data: OrderRequest) => {
        console.log(data)
    };

    return (
        <OrderPageLayout>
            <form
                className="w-3/4 h-full space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CommonTitle
                    size="2xl"
                    text="Оформлення замовлення"
                />
                <AdvertisementInfo
                    seller={item?.sellerName}
                    adName={item?.name}
                />
                <DeliveryMethod
                    register={register}
                    setValue={setValue}
                />
                <PaymentMethod
                    register={register}
                />
                <ContactInfo
                    register={register}
                    errors={formState.errors}
                />
                <OrderSubmitButton>
                    Оформити замовлення
                </OrderSubmitButton>
            </form>
            <RightPanelWithDetails price={item?.price} />
        </OrderPageLayout>
    );
}