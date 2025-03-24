import {useEffect, useState} from "react";
import {BACKEND_URL} from "../../globals-env.ts";
import {CategoryDTO} from "../../types/common/category-dto.ts";

export const useFetchCategories = () => {
    const [data, setData] = useState<CategoryDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/catalogue-service/api/category/all`);
                const result = await response.json()
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};