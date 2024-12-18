type Props = {
    date: string;
};

export default function HomeProductDateInfo({date}: Props) {
    return (
        <div className={"w-full h-fit text-left text-sm font-monserrat pb-4"}>
            {date}
        </div>
    );
};