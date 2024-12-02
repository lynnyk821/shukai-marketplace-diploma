import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function CatalogCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-72 flex items-center justify-center border-solid border-b-2 border-[#eee]"}>
            <div className={"w-full h-full max-w-[1200px]"}>
                {children}
            </div>
        </div>
    );
};