import {forwardRef, LegacyRef} from "react";
import {MyContainerProps} from "../../../../types/help/my-container-props.ts";


const UserLogoButtonLayout = forwardRef(({children} : MyContainerProps, ref) => {
    return (
        <div className={"w-fit h-full relative z-50"} ref={ref as LegacyRef<HTMLDivElement>}>
            {children}
        </div>
    );
});

export default UserLogoButtonLayout;