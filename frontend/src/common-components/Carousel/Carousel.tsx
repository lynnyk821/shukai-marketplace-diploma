import { useState } from "react";
import CarouselButton from "./components/CarouselButton.tsx";
import CarouselLayout from "./CarouselLayout.tsx";
import CarouselContent from "./components/CarouselContent.tsx";

type Props = {
    size: "sm" | "lg"
    data: string[],
    cols: number,
};

export default function Carousel({ data, cols }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <CarouselLayout>
            <CarouselButton
                size="sm"
                side="left"
                onClick={prevSlide}
            >&lt;</CarouselButton>
            <CarouselContent
                size="sm"
                data={data}
                activeIndex={activeIndex}
                cols={cols}
            />
            <CarouselButton
                size="sm"
                side="right"
                onClick={nextSlide}
            >&gt;</CarouselButton>
        </CarouselLayout>
    );
}
