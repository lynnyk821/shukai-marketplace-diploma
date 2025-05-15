import {Icon} from "@iconify/react";

type Props = {
    phoneNumber: string,
    name: string,
    id?: number,
}

export default function SellerName({phoneNumber, name}: Props) {
    return (
        <div className={"w-full flex"}>
            <div className={"w-1/2"}>
                <button className={
                    "w-fit text-left text-lg text-[#414141] font-inter font-medium " +
                    "hover:text-yellow-600 transition duration-200 ease-in-out cursor-pointer"}
                >
                    {name}
                </button>
            </div>
            <div className={"flex items-center text-[#414141] gap-1"}>
                <Icon icon="solar:phone-linear" width="17" height="17"/>
                <p className={"text-[13px] font-inter font-medium"}>
                    {phoneNumber}
                </p>
            </div>
        </div>
    );
};