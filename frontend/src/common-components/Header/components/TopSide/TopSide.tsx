import TopSideLayout from "./TopSideLayout.tsx";
import {Logo} from "./components/Logo.tsx";
import '../../../../globals-env.ts';
import {LOGO_NAME} from "../../../../globals-env.ts";

export default function TopSide() {
    return (
        <TopSideLayout>
            <Logo>{LOGO_NAME}</Logo>
        </TopSideLayout>
    );
};