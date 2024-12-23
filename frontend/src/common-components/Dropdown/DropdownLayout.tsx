import {MyContainerProps} from "../../types/my-container-props.ts";

type Props = MyContainerProps & {
    size: number,
    ref: React.RefObject<HTMLDivElement>;
}

export default function DropdownLayout({children, size, ref}: Props) {
    return (
        <div
            className={"h-full w-fit relative z-10"} ref={ref}
            style={{width: `${size}rem`}}
        >{children}</div>
    );
};