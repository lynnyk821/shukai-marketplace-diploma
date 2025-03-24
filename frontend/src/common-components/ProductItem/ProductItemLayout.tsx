import {MyContainerProps} from "../../types/help/my-container-props.ts";

export default function ProductItemLayout({children}: MyContainerProps) {
    return (
        <li className={"w-full h-fit flex flex-col"}>
            {children}
        </li>
    );
};