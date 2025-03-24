import DateInfoLayout from "./DateInfoLayout.tsx";
import {formatDate} from "../../../../../../../../utils/helpers/helpers.ts";

type DateInfoProps = {
    date: Date,
}

export default function DateInfo({date}: DateInfoProps) {
    return (
        <DateInfoLayout>
            <p className={"text-[#414141] text-opacity-70 text-[16px] font-monserrat font-medium"}>
                {formatDate(date)}
            </p>
        </DateInfoLayout>
    );
};