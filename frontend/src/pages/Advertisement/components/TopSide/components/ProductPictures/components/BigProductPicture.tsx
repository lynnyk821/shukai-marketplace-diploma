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
        <div className="h-[40rem] w-full relative flex items-center border border-solid border-[#414141] border-opacity-20 rounded-lg overflow-hidden">
            <button
                className="w-10 h-10 text-[#414141] rounded-xl absolute flex items-center justify-center left-2 bg-[#eee] z-10"
                onClick={handlePrev}
            >
                <Icon icon="solar:arrow-left-outline" width="24" height="24" />
            </button>

            {/* Анимационный контейнер */}
            <div className="w-full h-full centered">
                <div className={"w-5/6 h-full overflow-hidden centered"}>
                    <img
                        className={"object-cover object-center scale-150"}
                        src={data[currentIndex]}
                        alt={String(currentIndex)}
                    />
                </div>
            </div>

            <button
                className="w-10 h-10 text-[#414141] rounded-xl absolute flex items-center justify-center right-2 bg-[#eee] z-10"
                onClick={handleNext}
            >
                <Icon icon="solar:arrow-right-outline" width="24" height="24" />
            </button>
        </div>
    );
}
