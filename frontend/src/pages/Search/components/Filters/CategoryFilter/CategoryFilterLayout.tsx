import {MyContainerProps} from "../../../../../types/common/my-container-props.ts";

export default function CategoryFilterLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full h-52 bg-amber-100"}>{children}</div>
    );
};