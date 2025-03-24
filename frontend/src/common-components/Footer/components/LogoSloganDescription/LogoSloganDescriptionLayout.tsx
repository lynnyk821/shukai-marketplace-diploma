import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function LogoSloganDescriptionLayout({children} : MyContainerProps) {
    return (
        <ul className={"h-60 flex flex-col"}>
            {children}
        </ul>
    );
};