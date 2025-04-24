import {MyContainerProps} from "../../types/help/my-container-props.ts";
import {forwardRef, LegacyRef} from "react";

const CartLayout = forwardRef((
    {children} : MyContainerProps,
     ref: LegacyRef<HTMLDivElement>
) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm">
            <div
                ref={ref}
                className={"w-1/2 h-1/2 fixed top-1/2 left-1/2 " +
                    "transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 p-6"}
            >
                {children}
            </div>
        </div>
    );
});

export default CartLayout;