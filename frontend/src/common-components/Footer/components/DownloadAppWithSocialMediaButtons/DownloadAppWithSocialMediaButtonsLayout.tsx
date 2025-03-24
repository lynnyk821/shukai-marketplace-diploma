import {MyContainerProps} from "../../../../types/help/my-container-props.ts";
import FooterOtherLinks from "./components/FooterOtherLinks/FooterOtherLinks.tsx";

export function DownloadAppWithSocialMediaButtonsLayout({children}: MyContainerProps) {
    return (
        <div className={"h-60 flex flex-col"}>
            <div className={"w-full h-28 flex"}>
                {children}
            </div>
            <FooterOtherLinks></FooterOtherLinks>
        </div>
    );
}