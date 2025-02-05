import {Icon} from "@iconify/react";

export default function SellerStats() {
    return (
        <div className={"flex gap-3"}>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="solar:phone-linear" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>{"0682763324"}</p>
            </div>
            <div className={"text-[#414141] flex items-center gap-1"}>
                <Icon icon="mi:location" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>Київ</p>
            </div>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="mdi:clock-outline" width="18" height="18"/>
                <p className={"text-sm font-inter font-medium"}>Була 9 годин тому</p>
            </div>
        </div>
    );
};