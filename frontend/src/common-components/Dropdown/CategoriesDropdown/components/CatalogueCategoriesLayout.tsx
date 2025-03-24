import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function CatalogueCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"h-full w-screen centered border-b-[1px] border-solid border-opacity-15 border-[#414141]"}>
            <div className={"w-full h-[22rem] max-w-container centered "}>
                {children}
            </div>
        </div>
    );
};