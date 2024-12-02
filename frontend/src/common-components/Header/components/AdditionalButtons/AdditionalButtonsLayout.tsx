import {ChildComp} from "../../../../types/child-comp.ts";

export default function AdditionalButtonsLayout({children}: ChildComp) {
    return (
        <div className={"gap-3 flex-1 flex justify-end items-center"}>
            {children}
        </div>
    );
};