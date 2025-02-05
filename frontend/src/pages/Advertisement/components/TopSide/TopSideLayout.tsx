import {MyContainerProps} from "../../../../types/my-container-props.ts";
import MoveBackLinksBar from "./components/MoveBackLinksBar/MoveBackLinksBar.tsx";

export default function TopSideLayout({children}: MyContainerProps) {
    return (
        <div className={"h-fit"}>
            <MoveBackLinksBar/>
            <div className={"w-full h-[44rem] flex gap-10 mb-10"}>
                {children}
            </div>
        </div>
    );
};