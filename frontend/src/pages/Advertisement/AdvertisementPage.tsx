import AdvertisementPageLayout from "./AdvertisementPageLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";
import MoveBackLinksBar from "../../common-components/MoveBackLinksBar/MoveBackLinksBar.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {AdByIdResponse} from "../../types/response/ad-by-id-response.ts";

export default function AdvertisementPage() {
    // Отримуємо `id` з URL
    const {id} = useParams<{ id: string }>();

    // Стан для збереження даних оголошення
    const [adPageData, setAdPageData] = useState<AdByIdResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Виконуємо запит на бекенд
    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const response = await axios.get<AdByIdResponse>(
                    `http://localhost:8080/catalogue-service/api/catalogue/${id}`
                );
                setAdPageData(response.data);
            } catch (err) {
                setError("Не вдалося завантажити оголошення");
                console.error("Помилка запиту:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAdvertisement();
    }, [id]);

    if (loading) {
        return <div>Завантаження...</div>;
    }

    // Відображення помилки
    if (error) {
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