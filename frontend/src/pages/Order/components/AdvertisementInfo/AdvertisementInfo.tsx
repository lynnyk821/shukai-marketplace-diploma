import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = {
    seller: string,
    title: string,
}

export default function AdvertisementInfo({seller, title}: Props) {
    return (
        <div
            className="flex flex-col gap-4 border-b border-solid border-[#414141]
            border-opacity-20 pb-4 text-[#383838] font-inter"
        >
            <CommonTitle text={`Продавець: ${seller}`} size={"xl"} />
            <p className="text-[16px]">{title}</p>
        </div>
    );
};