import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";

export default function CatalogueCategoriesLayout({children}: MyContainerProps) {
    return (
        <div className={"h-full w-screen centered border-b-[1px] border-solid border-opacity-15 border-[#414141]"}>
            <div className={"w-full h-72 max-w-container centered "}>
                {children}
            </div>
        </div>
    );
};