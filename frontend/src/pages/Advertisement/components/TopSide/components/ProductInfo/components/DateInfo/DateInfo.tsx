import DateInfoLayout from "./DateInfoLayout.tsx";

type DateInfoProps = {
    date: string,
}

export default function DateInfo({date}: DateInfoProps) {
    return (
        <DateInfoLayout>
            <p className={"text-[#414141] text-opacity-70 text-[16px] font-monserrat font-medium"}>
                {date}
            </p>
        </DateInfoLayout>
    );
};