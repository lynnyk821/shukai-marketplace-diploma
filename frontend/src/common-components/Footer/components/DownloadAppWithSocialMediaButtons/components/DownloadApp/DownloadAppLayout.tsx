import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";

export default function DownloadAppLayout({children}: MyContainerProps) {
    return (
        <div className={"w-80 flex flex-col"}>
            <div className={"w-full h-10 centered"}>
                <p className={"w-full text-left text-lg font-monserrat font-medium"}>Завантажуйте додаток</p>
            </div>
            <div className={"w-full h-10 mt-5 flex items-center gap-3"}>
                {children}
            </div>
        </div>
    );
};