import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function FavoriteProductsGridLayout({children}: MyContainerProps) {
    return (
        <ul className={"w-full flex-1 grid grid-cols-5 gap-x-3 gap-y-8"}>{children}</ul>
    );
};