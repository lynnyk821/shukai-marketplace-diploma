import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function FiltersLayout({children}: MyContainerProps) {
    return (
        <ul className={"w-1/4 flex flex-col gap-1 pr-10"}>
            {children}
        </ul>
    );
};