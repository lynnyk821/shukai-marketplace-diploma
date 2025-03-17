import {MyContainerProps} from "../../types/common/my-container-props.ts";

export default function ProductItemLayout({children}: MyContainerProps) {
    return (
        <li className={"w-full h-fit flex flex-col"}>
            {children}
        </li>
    );
};