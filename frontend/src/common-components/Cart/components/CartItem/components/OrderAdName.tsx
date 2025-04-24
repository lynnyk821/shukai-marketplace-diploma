type Props ={
    name: string,
};

export default function OrderAdName({name}: Props) {
    return (
        <div className={"flex flex-1 py-3 flex-col gap-2 h-full justify-center"}>
            <p className={"text-[#8e8e8e] text-[12px]"}>Назва</p>
            <span className={"text-[13px]"}>{name}</span>
        </div>
    );
};