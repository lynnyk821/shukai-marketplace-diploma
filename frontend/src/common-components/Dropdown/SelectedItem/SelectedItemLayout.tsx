import {MyButtonProps} from "../../../types/common/my-button-props.ts";
import {MyContainerProps} from "../../../types/common/my-container-props.ts";

type Props = MyButtonProps & MyContainerProps & {
    size: number,
}

export default function SelectedItemLayout({size, children, onClick}: Props) {
    return (
        <button
            className={
                "h-full min-w-44 rounded-l-lg flex bg-white cursor-pointer " +
                "border-[1px] border-solid border-[#414141] border-opacity-30"
            }
            onClick={onClick}
            style={{width: `${size}rem`}}
        >
            {children}
        </button>
    );
};