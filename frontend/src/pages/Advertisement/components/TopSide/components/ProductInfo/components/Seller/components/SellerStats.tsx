import {Icon} from "@iconify/react";

type Props = {
    region: string,
    visitingTime: string,
}

export default function SellerStats({region, visitingTime}: Props) {
    return (
        <div className={"w-full flex"}>
            <div className={"w-1/2 text-[#414141] flex items-center gap-1"}>
                <Icon icon="mi:location" width="16" height="16"/>
                <p className={"text-[13px] font-inter font-medium"}>
                    {region}
                </p>
            </div>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="mdi:clock-outline" width="16" height="16"/>
                <p className={"text-[13px] font-inter font-medium"}>
                    {visitingTime}
                </p>
            </div>
        </div>
    );
};