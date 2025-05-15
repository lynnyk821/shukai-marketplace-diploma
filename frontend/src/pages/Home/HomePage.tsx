import ProductsGrid from "./components/ProductsGrid/ProductsGrid.tsx";
import BigPictureBanner from "./components/BigPictureBanner/BigPictureBanner.tsx";
import HomePageLayout from "./HomePageLayout.tsx";
import {BACKEND_URL} from "../../globals-env.ts";
import {RecentlyWatched} from "./components/RecentlyWatched/RecentlyWatched.tsx";
import {useEffect, useState} from "react";
import {HomeResponse} from "../../types/response/home-response.ts";

export function HomePage() {
    const [homeResponse, setHomeResponse] = useState<HomeResponse>({
        newAdvertisements: [], autoGoodAdvertisements: [],
        electronicAdvertisements: [], clothesAdvertisements: []
    });

    useEffect(() => {
        fetch(`${BACKEND_URL}/catalogue-service/api/home`)
            .then((response) => response.json())
            .then((data) => {
                setHomeResponse(data as HomeResponse)
            })
            .catch((error) => console.error("Помилка завантаження даних:", error));
    }, [])

    return (
        <HomePageLayout>
            <BigPictureBanner />
            <ProductsGrid products={homeResponse.newAdvertisements} text={"Нові оголошення"} />
            <ProductsGrid products={homeResponse.clothesAdvertisements} text={"Мода та стиль"} />
            <ProductsGrid products={homeResponse.electronicAdvertisements} text={"Електроніка"} />
            <ProductsGrid products={homeResponse.autoGoodAdvertisements} text={"Автотовари"} />
            <RecentlyWatched></RecentlyWatched>
        </HomePageLayout>
    );
};