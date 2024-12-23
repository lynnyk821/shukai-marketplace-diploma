import {MyContainerProps} from "../../types/my-container-props.ts";

export default function ProductItemLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-fit flex flex-col"}>
            {children}
        </div>
    );
};