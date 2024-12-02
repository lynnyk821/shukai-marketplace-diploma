import {ChildComp} from "../../../../types/child-comp.ts";

export default function HeaderInputWithDropdownLayout({children}: ChildComp) {
    return (
        <div className={"inline-block flex justify-center items-center"}>{children}</div>
    );
};