import DownloadApp from "./components/DownloadApp/DownloadApp.tsx";
import SocialMedia from "./components/SocialMedia/SocialMedia.tsx";
import {DownloadAppWithSocialMediaButtonsLayout} from "./DownloadAppWithSocialMediaButtonsLayout.tsx";

export function DownloadAppWithSocialMediaButtons() {
    return (
        <DownloadAppWithSocialMediaButtonsLayout>
            <DownloadApp></DownloadApp>
            <SocialMedia></SocialMedia>
        </DownloadAppWithSocialMediaButtonsLayout>
    );
};