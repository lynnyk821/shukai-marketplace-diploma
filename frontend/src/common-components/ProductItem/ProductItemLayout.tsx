import {MyContainerProps} from "../../types/help/my-container-props.ts";

type Props = MyContainerProps & {
    className: string,
}

export default function ProductItemLayout({className, children}: Props) {
    return (
        <li className={"w-full h-fit flex flex-col rounded-lg p-3 border border-solid border-[#414141] border-opacity-20"}>
            <div className={`${className} flex flex-col gap-2`}>
                {children}
            </div>
        </li>
    );
};