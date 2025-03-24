import {MyContainerProps} from "../../types/help/my-container-props.ts";
import {forwardRef} from "react";

type Props = MyContainerProps & {
    size: number,
}

const DropdownLayout = forwardRef<HTMLDivElement, Props>(
    ({ children, size }, ref) => (
        <div
            ref={ref}
            className={"h-full w-fit relative z-20"}
            style={{ width: `${size}rem` }}
        >
            {children}
        </div>
    )
);

export default DropdownLayout;