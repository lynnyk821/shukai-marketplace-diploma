import {MyContainerProps} from "../../../../types/help/my-container-props.ts";
import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";

type Props = MyContainerProps & {
    text: string,
}

export default function ProductsGridLayout({text, children} : Props) {
    return (
        <div className={"w-full pt-2 pb-8 text-[#414141]"}>
            <div className={"w-full h-fit pb-6"}>
                <CommonTitle text={text} size={"xl"} />
            </div>
            {children}
        </div>
    );
};