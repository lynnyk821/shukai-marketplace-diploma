import {MyContainerProps} from "../../../../types/my-container-props.ts";
import {Title} from "../../../../common-components/Title/Title.tsx";

type Props = MyContainerProps & {
    text: string,
}

export default function ProductsGridLayout({text, children} : Props) {
    return (
        <div className={"w-full pt-2 pb-8 text-[#414141]"}>
            <Title text={text} />
            {children}
        </div>
    );
};