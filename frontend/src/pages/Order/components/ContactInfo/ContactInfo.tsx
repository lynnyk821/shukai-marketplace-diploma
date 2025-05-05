import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {OrderRequest} from "../../../../types/request/order-request.ts";

type Props = {
    register: UseFormRegister<OrderRequest>,
    errors: FieldErrors<OrderRequest>,
};

export default function ContactInfo({register, errors}: Props) {
    return (
        <div className="space-y-4 text-[#414141] font-inter">
            <CommonTitle text={"Ваші контактні дані"} size={"xl"} />
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm mb-1">Прізвище*</label>
                    <input
                        {...register("customer.lastName")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.customer?.lastName && (
                        <p className="text-red-500 text-sm">{errors.customer.lastName.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm mb-1">Ім'я*</label>
                    <input
                        {...register("customer.firstName")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.customer?.firstName && (
                        <p className="text-red-500 text-sm">{errors.customer.firstName.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm mb-1">По батькові</label>
                    <input
                        {...register("customer.middleName")}
                        className="border p-2 w-full rounded"
                    />
                </div>
            </div>

            <div className="w-full">
                <label className="block text-sm mb-1">Телефон*</label>
                <input
                    {...register("customer.phoneNumber")}
                    className="border p-2 w-full rounded"
                />
                {errors.customer?.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.customer.phoneNumber.message}</p>
                )}
            </div>
        </div>
    );
};