import {HeaderLayout} from "./HeaderLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";

export function Header() {
    return (
        <HeaderLayout>
            <TopSide />
            <BottomSide />
        </HeaderLayout>
    );
};