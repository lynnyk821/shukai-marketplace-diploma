import {Icon} from "@iconify/react";

type Props = {
    region: string,
    phoneNumber: string,
    visitingTime: string,
}

export default function SellerStats({region, phoneNumber, visitingTime}: Props) {
    return (
        <div className={"flex gap-3"}>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="solar:phone-linear" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>
                    {phoneNumber}
                </p>
            </div>
            <div className={"text-[#414141] flex items-center gap-1"}>
                <Icon icon="mi:location" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>
                    {region}
                </p>
            </div>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="mdi:clock-outline" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>
                    {visitingTime}
                </p>
            </div>
        </div>
    );
};