import FooterGridLayout from "./FooterGridLayout.tsx";
import LogoSloganDescription from "./components/LogoSloganDescription/LogoSloganDescription.tsx";
import {DownloadAppWithSocialMediaButtons} from "./components/DownloadAppWithSocialMediaButtons/DownloadAppWithSocialMediaButtons.tsx";

export default function Footer() {
    return (
        <FooterGridLayout>
            <LogoSloganDescription></LogoSloganDescription>
            <DownloadAppWithSocialMediaButtons></DownloadAppWithSocialMediaButtons>
        </FooterGridLayout>
    );
};