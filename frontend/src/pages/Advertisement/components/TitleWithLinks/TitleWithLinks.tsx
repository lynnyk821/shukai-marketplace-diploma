import {MainTitle} from "../../../../common-components/Titles/MainTitle/MainTitle.tsx";
import MoveBackLinksBar from "../../../../common-components/MoveBackLinksBar/MoveBackLinksBar.tsx";
import TitleWithLinksLayout from "./TitleWithLinksLayout.tsx";

export default function TitleWithLinks() {
    return (
        <TitleWithLinksLayout>
            <MainTitle text={"Оголошення"} size={"2xl"}/>
            <MoveBackLinksBar></MoveBackLinksBar>
        </TitleWithLinksLayout>
    );
};