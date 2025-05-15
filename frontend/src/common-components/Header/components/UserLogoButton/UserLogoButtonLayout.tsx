import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function UserLogoButtonLayout({children}: MyContainerProps) {
    return (
        <div className="w-fit relative z-20">
            {children}
        </div>
    );
};
