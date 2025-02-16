import {MyContainerProps} from "../../../../types/my-container-props.ts";

export default function FavoriteProductsGridLayout({children}: MyContainerProps) {
    return (
        <ul className={"w-full flex-1 grid grid-cols-4 gap-x-3 gap-y-8"}>{children}</ul>
    );
};