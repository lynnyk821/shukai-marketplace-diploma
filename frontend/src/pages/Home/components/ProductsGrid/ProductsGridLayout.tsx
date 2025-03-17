import {MyContainerProps} from "../../../../types/common/my-container-props.ts";
import {MainTitle} from "../../../../common-components/Titles/MainTitle/MainTitle.tsx";

type Props = MyContainerProps & {
    text: string,
}

export default function ProductsGridLayout({text, children} : Props) {
    return (
        <div className={"w-full pt-2 pb-8 text-[#414141]"}>
            <div className={"w-full h-fit pb-6"}>
                <MainTitle text={text} size={"xl"} />
            </div>
            {children}
        </div>
    );
};