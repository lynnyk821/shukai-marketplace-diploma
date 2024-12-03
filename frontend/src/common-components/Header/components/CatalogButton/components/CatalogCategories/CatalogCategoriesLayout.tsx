import {MyContainerProps} from "../../../../../../types/my-container-props.ts";

export default function CatalogCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={
            "w-full h-72 flex items-center justify-center " +
            "border-solid border-b-[1px] border-[#414141] border-opacity-10"
        }>
            <div className={"w-full h-full max-w-[1200px]"}>
                {children}
            </div>
        </div>
    );
};