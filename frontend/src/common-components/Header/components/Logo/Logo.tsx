import {ChildComp} from "../../../../types/child-comp.ts";

export function Logo({children}: ChildComp) {
    return (
        <button
            className={
                "h-full font-poppins text-4xl font-bold centered " +
                "text-[#383838] text-opacity-90 inline-block"
            }
        >
            {children}
        </button>
    );
};