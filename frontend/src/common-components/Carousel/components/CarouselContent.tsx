type Props = {
    size: "sm" | "lg"
    data: any[],
    activeIndex: number,
    cols: number,
}

export default function CarouselContent({size, data, activeIndex, cols}: Props) {
    return (
        <ul
            className={`flex transition-transform duration-500 ease-in-out gap-x-4 ${size === "sm" ? "h-28" : "h-52"}`}
            style={{
                transform: `translateX(-${activeIndex * (100 / cols)}%)`,
                width: `${(data.length / cols) * 100}%`,
            }}
        >
            {data.map((item, index) => (
                <li
                    key={index}
                    className="flex items-center justify-center border-gray-500 bg-red-300"
                    style={{
                        minWidth: `${100 / cols}%`,
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};