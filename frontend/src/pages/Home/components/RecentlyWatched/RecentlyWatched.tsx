import RecentlyWatchedLayout from "./RecentlyWatchedLayout.tsx";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import {useRecentlyWatched} from "../../../../utils/hooks/useRecentlyWatchedAds.ts";

export function RecentlyWatched() {
    const {items} = useRecentlyWatched();

    return (
        <RecentlyWatchedLayout>
            {items.map((product) => (
                <ProductItem
                    className={"w-full h-52 text-[#414141] hover:text-yellow-600"}
                    product={product}
                    size={"sm"}
                />
            ))}
        </RecentlyWatchedLayout>
    );
};