import AdvertisementPageLayout from "./AdvertisementPageLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";
import MoveBackLinksBar from "../../common-components/MoveBackLinksBar/MoveBackLinksBar.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {AdByIdResponse} from "../../types/response/ad-by-id-response.ts";
import {useRecentlyWatched} from "../../utils/hooks/useRecentlyWatchedAds.ts";
import {ProductItemProps} from "../../types/common/product-item-props.ts";
import {AdvertisementProps} from "../../types/common/advertisement-props.ts";

export default function AdvertisementPage() {
    const {id} = useParams<{ id: string }>();

    // Стан для збереження даних оголошення
    const { addToRecentlyWatched } = useRecentlyWatched();
    const [adPageData, setAdPageData] = useState<AdByIdResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const convertToProductItem = (ad: AdvertisementProps): ProductItemProps => ({
        id: ad.id.toString(),
        date: String(ad.createdAt),
        title: ad.title,
        price: ad.price,
        image: ad.images[0] || 'default-image-url',
    });

    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const response = await axios.get<AdByIdResponse>(
                    `http://localhost:8080/catalogue-service/api/catalogue/${id}`
                );
                setAdPageData(response.data);

                const advertisement = convertToProductItem(response.data.advertisement);
                addToRecentlyWatched(advertisement);
            } catch (err) {
                setError("Не вдалося завантажити оголошення");
                console.error("Помилка запиту:", err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchAdvertisement();
        }
    }, [id]);

    if (loading) {
        return <div>Завантаження...</div>;
    } else if (error) {
        return <div>{error}</div>;
    }

    return (
        <AdvertisementPageLayout>
            <MoveBackLinksBar
                category={adPageData?.advertisement.category}
            />
            {adPageData && (
                <>
                    <TopSide advertisement={adPageData.advertisement}/>
                    <BottomSide data={adPageData}/>
                </>
            )}
        </AdvertisementPageLayout>
    );
}