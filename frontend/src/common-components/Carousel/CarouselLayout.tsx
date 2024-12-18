import {MyContainerProps} from "../../types/my-container-props.ts";

export default function CarouselLayout({children}: MyContainerProps) {
    return (
        <div className="relative h-fit text-[#414141] flex items-center font-inter overflow-hidden">
            {children}
        </div>
    );
};