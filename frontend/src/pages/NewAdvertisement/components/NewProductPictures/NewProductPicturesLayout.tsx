import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function NewProductPicturesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex flex-col h-fit"}>
            <div className={"w-full text-[#414141] font-inter font-medium text-xl py-4"}>Завантажено фото 0 з 9</div>
            <div className={"w-full h-[22rem] flex gap-6 mb-10"}>{children}</div>
        </div>
    );
};