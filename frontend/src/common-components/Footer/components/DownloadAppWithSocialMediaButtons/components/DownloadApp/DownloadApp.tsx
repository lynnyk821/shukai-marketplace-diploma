import DownloadAppLayout from "./DownloadAppLayout.tsx";
import {DownloadAppButton} from "./DownloadAppButton.tsx";
import appStoreImage from "../../../../../../assets/jpg/app-store-2x-min.jpg";
import googlePlayImage from "../../../../../../assets/jpg/google-play-2x-min.jpg";

export default function DownloadApp() {
    return (
        <DownloadAppLayout>
            <DownloadAppButton img={appStoreImage} alt={"AppStore"}/>
            <DownloadAppButton img={googlePlayImage} alt={"GooglePlay"}/>
        </DownloadAppLayout>
    );
};