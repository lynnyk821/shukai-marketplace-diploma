import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function UserLogoLayout({children}: MyContainerProps) {
    return (
        <div className={"flex-1 relative z-50"}>
            {children}
        </div>
    );
};