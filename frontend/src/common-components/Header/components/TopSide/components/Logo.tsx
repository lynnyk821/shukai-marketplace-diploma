import {ChildComp} from "../../../../../types/child-comp.ts";

export function Logo({children}: ChildComp) {
    return (
        <div className={"h-full text-4xl font-bold font-poppins centered-container text-[#383838] inline-block"}>
            {children}
        </div>
    );
};