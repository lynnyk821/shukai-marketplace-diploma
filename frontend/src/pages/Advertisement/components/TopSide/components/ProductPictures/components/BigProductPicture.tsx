import {Dispatch, SetStateAction} from "react";
import {Icon} from "@iconify/react";

type Props = {
    data: string[],
    currentIndex: number,
    setCurrentIndex: Dispatch<SetStateAction<number>>,
}

export default function BigProductPicture({ data, currentIndex, setCurrentIndex }: Props) {
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full flex-1 relative flex items-center bg-[#eee] rounded-xl overflow-hidden">
            {/* Кнопка для предыдущего изображения */}
            <button
                className="w-10 h-10 text-[#414141] rounded-xl absolute flex items-center justify-center left-2 bg-[#eee] z-10"
                onClick={handlePrev}
            >
                <Icon icon="solar:arrow-left-outline" width="24" height="24" />
            </button>

            {/* Анимационный контейнер */}
            <div className="w-full h-full flex items-center justify-center">
                <img
                    className={"object-cover"}
                    src={data[currentIndex]}
                    alt={String(currentIndex)}
                />
            </div>

            {/* Кнопка для следующего изображения */}
            <button
                className="w-10 h-10 text-[#414141] rounded-xl absolute flex items-center justify-center right-2 bg-[#eee] z-10"
                onClick={handleNext}
            >
                <Icon icon="solar:arrow-right-outline" width="24" height="24" />
            </button>
        </div>
    );
}
