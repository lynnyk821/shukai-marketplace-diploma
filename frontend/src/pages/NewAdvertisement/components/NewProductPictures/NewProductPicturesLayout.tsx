import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

type Props = MyContainerProps & {
    photoCount: number,
    error?: string,
}

export default function NewProductPicturesLayout({photoCount, error, children}: Props) {
    return (
        <div className={"w-full flex flex-col h-fit"}>
            <div className={"w-full text-[#414141] font-inter font-medium text-xl py-4"}>
                {`Завантажено фото ${photoCount} з 9`}
            </div>
            <div className={"w-full h-96 flex flex-col gap-3"}>
                <div className={"h-[87%] flex gap-3"}>{children}</div>
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        </div>
    );
};