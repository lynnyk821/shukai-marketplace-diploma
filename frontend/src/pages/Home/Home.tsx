import ProductsGrid from "./components/ProductsGrid/ProductsGrid.tsx";
import BigPictureBanner from "./components/BigPictureBanner/BigPictureBanner.tsx";
import HomeLayout from "./HomeLayout.tsx";
import {PRODUCT_ITEMS} from "../../globals-env.ts";
import {RecentlyWatched} from "./components/RecentlyWatched/RecentlyWatched.tsx";

// import banner from "../../assets/jpeg/shukai_3.jpeg"

export function Home() {
    return (
        <HomeLayout>
            <BigPictureBanner />
            <ProductsGrid products={PRODUCT_ITEMS} text={"Нові оголошення"} />
            <ProductsGrid products={PRODUCT_ITEMS} text={"Мода та стиль"} />
            <ProductsGrid products={PRODUCT_ITEMS} text={"Електроніка"} />
            <ProductsGrid products={PRODUCT_ITEMS} text={"Автотовари"} />
            <RecentlyWatched></RecentlyWatched>
        </HomeLayout>
    );
};