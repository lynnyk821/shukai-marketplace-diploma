import {CommonTitle} from "../../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import MoveBackLinksBar from "../../../../common-components/MoveBackLinksBar/MoveBackLinksBar.tsx";
import TitleWithLinksLayout from "./TitleWithLinksLayout.tsx";

export default function TitleWithLinks() {
    return (
        <TitleWithLinksLayout>
            <CommonTitle text={"Оголошення"} size={"2xl"}/>
            <MoveBackLinksBar></MoveBackLinksBar>
        </TitleWithLinksLayout>
    );
};