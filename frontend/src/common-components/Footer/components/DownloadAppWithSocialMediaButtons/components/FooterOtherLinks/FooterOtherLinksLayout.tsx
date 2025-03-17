import {MyContainerProps} from "../../../../../../types/common/my-container-props.ts";

export default function FooterOtherLinksLayout({children}: MyContainerProps) {
    return (
        <div className={"flex-1 mt-6 grid grid-cols-4 gap-y-6 gap-x-2  place-items-start place-content-center"}>
            {children}
        </div>
    );
};