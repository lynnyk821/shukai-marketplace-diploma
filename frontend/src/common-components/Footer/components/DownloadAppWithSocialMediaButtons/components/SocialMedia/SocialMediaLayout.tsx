import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function SocialMediaLayout({children}: MyContainerProps) {
    return (
        <div className={"flex-1 flex-col"}>
            <div className={"w-full h-10 centered"}>
                <p className={"w-full text-left text-lg font-monserrat font-medium"}>Соціальні мережі</p>
            </div>
            <div className={"w-full h-10 mt-5 flex items-center gap-5"}>
                {children}
            </div>
        </div>
    );
};