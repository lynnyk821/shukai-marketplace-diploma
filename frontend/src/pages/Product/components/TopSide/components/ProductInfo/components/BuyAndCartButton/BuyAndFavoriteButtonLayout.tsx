import {MyContainerProps} from "../../../../../../../../types/my-container-props.ts";

export default function BuyAndFavoriteButtonLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex gap-4 my-5"}>
            {children}
        </div>
    );
};