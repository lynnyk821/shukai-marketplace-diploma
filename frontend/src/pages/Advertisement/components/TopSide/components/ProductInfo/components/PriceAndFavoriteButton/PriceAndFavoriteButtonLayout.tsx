import {MyContainerProps} from "../../../../../../../../types/common/my-container-props.ts";

export default function PriceAndFavoriteButtonLayout({children}: MyContainerProps) {
    return (
        <div className={"w-full flex items-center gap-5 mt-5"}>
            {children}
        </div>
    );
};