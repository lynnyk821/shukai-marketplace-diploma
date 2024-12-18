import {MyContainerProps} from "../../../../types/my-container-props.ts";

type Props = MyContainerProps & {
    text: string,
}

export default function ProductsGridLayout({text, children} : Props) {
    return (
        <div className={"w-full pt-2 pb-8 text-[#414141]"}>
            <p className={"my-10 rounded-lg flex items-center text-lg font-monserrat font-medium"}>{text}</p>
            {children}
        </div>
    );
};