import RecentlyWatchedLayout from "./RecentlyWatchedLayout.tsx";
import {PRODUCT_ITEMS} from "../../../../globals-env.ts";
import RecentlyWatchedItem from "./components/RecentlyWatchedItem.tsx";

import noImage from "../../../../assets/jpg/no-image.jpg"

export function RecentlyWatched() {
    return (
        <RecentlyWatchedLayout>
            {PRODUCT_ITEMS.slice(0, 6).map((product) => (
                <RecentlyWatchedItem
                    id={product.id}
                    date={product.date}
                    name={product.name}
                    price={product.price}
                    image={noImage}
                />
            ))}
        </RecentlyWatchedLayout>
    );
};