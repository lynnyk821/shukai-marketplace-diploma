import {forwardRef, LegacyRef} from "react";
import {MyContainerProps} from "../../../../types/my-container-props.ts";


const UserLogoButtonLayout = forwardRef(({children} : MyContainerProps, ref) => {
    return (
        <div className={"flex-1 relative z-50"} ref={ref as LegacyRef<HTMLDivElement>}>
            {children}
        </div>
    );
});

export default UserLogoButtonLayout;