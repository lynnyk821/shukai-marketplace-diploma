import RecentlyWatchedLayout from "./RecentlyWatchedLayout.tsx";
import {PRODUCT_ITEMS} from "../../../../globals-env.ts";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";

export function RecentlyWatched() {
    return (
        <RecentlyWatchedLayout>
            {PRODUCT_ITEMS.slice(0, 6).map((product) => (
                <ProductItem
                    className={"w-full h-72 text-[#414141] hover:text-yellow-600"}
                    product={product}
                    size={"sm"}
                />
            ))}
        </RecentlyWatchedLayout>
    );
};