import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = {
    register: any,
    errors: any,
};

export default function ContactInfo({register, errors}: Props) {
    return (
        <div className="space-y-4 text-[#414141] font-inter">
            <CommonTitle text={"Ваші контактні дані"} size={"xl"} />
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm mb-1">Прізвище*</label>
                    <input
                        {...register("lastName")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
                <div>
                    <label className="block text-sm mb-1">Ім'я*</label>
                    <input
                        {...register("firstName")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                    <label className="block text-sm mb-1">По батькові</label>
                    <input
                        {...register("middleName")}
                        className="border p-2 w-full rounded"
                    />
                </div>
            </div>

            <div className="w-full">
                <label className="block text-sm mb-1">Телефон*</label>
                <input
                    {...register("phone")}
                    className="border p-2 w-full rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
        </div>
    );
};