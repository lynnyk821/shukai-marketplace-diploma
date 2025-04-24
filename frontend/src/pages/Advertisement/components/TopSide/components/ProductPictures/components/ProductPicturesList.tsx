type Props = {
    data: string[],
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
};

export default function ProductPicturesList({ data, currentIndex, setCurrentIndex }: Props) {
    return (
        <ul className={"grid grid-cols-8 h-20 gap-x-2 my-5"}>
            {data.map((item, index) => (
                <button
                    key={index}
                    className={
                        `flex items-center justify-center shrink-0 
                        overflow-hidden object-cover rounded-xl transition-all duration-300 ${
                        currentIndex === index ? "border-[1px] border-solid border-[#414141] border-opacity-60" : "border-none"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                >
                    <img src={item} alt={String(index)} />
                </button>
            ))}
        </ul>
    );
};
