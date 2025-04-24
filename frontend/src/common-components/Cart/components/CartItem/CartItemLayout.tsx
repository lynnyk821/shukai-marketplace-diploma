import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

type Props = MyContainerProps & {
    isHidden: boolean,
}

export default function CartItemLayout({isHidden, children}: Props) {
    return (
        <div className={`w-full h-fit ${isHidden && "hidden"}`}>
            {children}
        </div>
    );
};