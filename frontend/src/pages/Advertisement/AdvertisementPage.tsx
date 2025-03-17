import AdvertisementPageLayout from "./AdvertisementPageLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";
import MoveBackLinksBar from "../../common-components/MoveBackLinksBar/MoveBackLinksBar.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Advertisement} from "../../types/advertisement/advertisement.ts";
import axios from "axios";

export default function AdvertisementPage() {
    // Отримуємо `id` з URL
    const {id} = useParams<{ id: string }>();

    // Стан для збереження даних оголошення
    const [advertisement, setAdvertisement] = useState<Advertisement | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Виконуємо запит на бекенд
    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const response = await axios.get<Advertisement>(
                    `http://localhost:8080/catalogue-service/api/catalogue/${id}`
                );
                setAdvertisement(response.data);
            } catch (err) {
                setError("Не вдалося завантажити оголошення");
                console.error("Помилка запиту:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAdvertisement();
    }, [id]); // Залежність від `id`

    if (loading) {
        return <div>Завантаження...</div>;
    }

    // Відображення помилки
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <AdvertisementPageLayout>
            <MoveBackLinksBar/>
            {advertisement && (
                <>
                    <TopSide advertisement={advertisement}/>
                    <BottomSide advertisement={advertisement}/>
                </>
            )}
        </AdvertisementPageLayout>
    );
}