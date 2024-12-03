import LogoSloganDescriptionLayout from "./LogoSloganDescriptionLayout.tsx";
import {AppDescription} from "./components/AppDescription.tsx";
import LogoWithText from "./components/LogoWithText.tsx";
import {Trademark} from "./components/Trademark.tsx";

export default function LogoSloganDescription() {
    return (
        <LogoSloganDescriptionLayout>
            <LogoWithText></LogoWithText>
            <AppDescription></AppDescription>
            <Trademark></Trademark>
        </LogoSloganDescriptionLayout>
    );
};